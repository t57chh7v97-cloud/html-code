// Where & When — offline support. The page itself is fetched fresh when online (so updates show up),
// and the app, its data and its libraries are cached so it still opens with no internet.
const CACHE='ww-globe-v1';
const CORE=['./','./index.html','./places.txt','./countries-50m.json','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
const LIBS=/^https:\/\/(cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com)\//;
self.addEventListener('fetch',e=>{
  const req=e.request; if (req.method!=='GET') return; const url=new URL(req.url);
  if (req.mode==='navigate' || (url.origin===location.origin && /index\.html$|\/$/.test(url.pathname))){      // page: network first
    e.respondWith(fetch(req).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put('./index.html',cp)); return r; }).catch(()=>caches.match('./index.html'))); return; }
  if (url.origin===location.origin || LIBS.test(req.url)){                                                     // data + libraries: cache first, refresh in the background
    e.respondWith(caches.open(CACHE).then(async c=>{ const hit=await c.match(req); const net=fetch(req).then(r=>{ if (r.ok || r.type==='opaque') c.put(req,r.clone()); return r; }).catch(()=>hit);
      return hit || net; })); return; }
  // live data (ISS, clouds, earthquakes, aurora, music, YouTube): straight to the network
});
