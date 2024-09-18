const cacheName = 'eatwhat-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/images/blackcat.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
