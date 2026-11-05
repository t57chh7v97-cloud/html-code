// v2: v1 never cached Leaflet itself (loaded from a CDN, not this origin) --
// offline, that left `L` undefined, initMap() threw immediately, and since
// nothing after it in boot()'s try block ever ran (not wireUI(), not the
// offline banner, nothing), the app looked completely dead. Bumping the
// cache name forces every existing install to pick up this fixed shell list.
const CACHE = "ebikemaps-shell-v2";
const SHELL = [
  "./EbikeMaps.html",
  "./ebikemaps.webmanifest",
  "./icons/ebikemaps-192.png",
  "./icons/ebikemaps-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
];
// Populated by EbikeMaps.html's "Download offline map" action (the page
// writes to this cache directly -- the Cache API is available on window,
// not just here), never by this worker's own install/fetch logic. Must stay
// out of the activate handler's cleanup below, or every shell update would
// silently wipe out every rider's downloaded maps.
const TILE_CACHE = "ebikemaps-tiles-v1";

self.addEventListener("install", function(e){
  // Each entry caches independently -- cache.addAll() is all-or-nothing, so
  // a transient hiccup fetching the cross-origin Leaflet CDN files would
  // otherwise fail the WHOLE install and leave this app's own same-origin
  // files uncached too, which is worse than not adding Leaflet at all.
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(url){
      return c.add(url).catch(function(err){ console.warn("sw: failed to pre-cache", url, err); });
    }));
  }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE && k!==TILE_CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});

var TILE_HOST_RE = /^[abc]\.tile\.openstreetmap\.org$/;
function canonicalTileUrl(url){ return "https://tile.openstreetmap.org"+url.pathname; }

self.addEventListener("fetch", function(e){
  var url = new URL(e.request.url);

  // Tiles: try the network (so a live ride always sees current map data),
  // falling back to whatever was pre-downloaded for this area. Cached and
  // looked up under one canonical hostname regardless of which a/b/c
  // subdomain actually served either request -- see TILE_CACHE's comment
  // above for why that matters.
  if(TILE_HOST_RE.test(url.hostname)){
    var canonical = canonicalTileUrl(url);
    e.respondWith(
      fetch(e.request).catch(function(){ return caches.match(canonical, { cacheName: TILE_CACHE }); })
    );
    return;
  }

  // Network-first for the app shell only, so a fresh deploy is picked up
  // immediately when online, and the app still opens if you launch it with
  // no signal.
  var isShell = e.request.mode === "navigate" || SHELL.some(function(p){
    // An absolute entry (the Leaflet CDN) is matched by exact URL, since its
    // pathname alone wouldn't distinguish it from same-named files elsewhere;
    // a relative entry is one of this app's own files, matched by path suffix.
    return p.indexOf("http")===0 ? e.request.url===p : url.pathname.endsWith(p.replace("./","/"));
  });
  if(!isShell) return;
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return res;
    }).catch(function(){ return caches.match(e.request); })
  );
});
