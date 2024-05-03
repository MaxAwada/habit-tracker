let cacheName = 'static-v1';
let staticList = self.__WB_MANIFEST;
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(staticList.map(item => item.url));
    })
  );
});

self.addEventListener('activate', () => {
  // Обработка события activate
  // В этом примере мы не делаем ничего, просто слушаем событие activate
});

self.addEventListener('fetch', event => {
   event.respondWith(
    // Пытаемся получить ресурс из сети
    fetch(event.request).catch(function() {
      // Если не удалось получить ресурс из сети, пытаемся получить его из кэша
      return caches.match(event.request);
    })
  );
});