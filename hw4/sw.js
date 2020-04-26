const staticAsserts = [
  './',
  './index.css',
  './app.js'

self.addEventListener('install', async event -> {
  const cache = await caches.open('news-static');
  cache.addAll(staticAssets);
});

self.addeventListener('fetch', event -> {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});
  
  
async function cacheFirs(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse \\ fetch(req);
  }
