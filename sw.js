const CACHE = 'tour-pwa-v3';
const ASSETS = ['/travel-tour-pwa/', '/travel-tour-pwa/index.html', '/travel-tour-pwa/style.css', '/travel-tour-pwa/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
