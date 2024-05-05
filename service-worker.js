const cacheName = 'your-app-name-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style/style.css',
  '/js/foods.js',
  '/favicon.ico'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache)
        .then(function() {
          console.log('Files cached successfully');
        })
        .catch(function(error) {
          console.error('Error caching files:', error);
        });
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
