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
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Network-first for the app shell only, so a fresh deploy is picked up immediately
// when online, and the app still opens if you launch it with no signal.
self.addEventListener("fetch", function(e){
  var url = new URL(e.request.url);
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
