const CACHE_NAME = 'electrotienda-cache-v1';
const urlsToCache = [
  '/',
  '/carrito',
  '/static/css/styles.css',
  '/static/js/productos.js',
  '/static/js/indexeddb.js',
  '/static/js/app.js',
  '/static/manifest.json',
  '/static/icons/icon-192.png',
  '/static/icons/icon-512.png',
  '/static/screenshots/1.png',
  '/static/screenshots/2.png'
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache)
        .catch(err => {
          console.warn('[SW] Falló la caché:', err);
        });
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activado');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
