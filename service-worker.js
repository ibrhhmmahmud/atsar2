const CACHE='atsar-v2.2.0';
const ASSETS=[
  './','./index.html','./ibadah.html','./murojaah.html','./aktivitas.html','./profil.html',
  './statistik.html','./target-streak.html','./kalender.html','./qadha.html','./doa.html',
  './ibadah-custom.html','./personalisasi.html','./waktu-shalat.html','./tampilan.html','./backup.html',
  './css/style.css','./js/config.js','./js/db.js','./js/app.js','./manifest.webmanifest','./assets/icon.svg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  // Only cache same-origin assets; never cache third-party data by accident.
  if(new URL(e.request.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{
    if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return resp;
  }).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
