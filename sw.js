const CACHE = "ebikemaps-shell-v1";
const SHELL = [
  "./EbikeMaps.html",
  "./ebikemaps.webmanifest",
  "./icons/ebikemaps-192.png",
  "./icons/ebikemaps-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }));
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
  var isShell = e.request.mode === "navigate" || SHELL.some(function(p){ return url.pathname.endsWith(p.replace("./","/")); });
  if(!isShell) return;
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return res;
    }).catch(function(){ return caches.match(e.request); })
  );
});
