function registerServiceWorker() {
// регистрирует скрипт sw в поддерживаемых браузерах
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  }
}

// sw.js
self.addEventListener('install', e => {
 e.waitUntil(
   // после установки service worker
   // открыть новый кэш
   caches.open('my-pwa-cache').then(cache => {
     // добавляем все URL ресурсов, которые хотим закэшировать
     return cache.addAll([
       '/',
       '/index.html',
       '/about.html',
       '/images/doggo.jpg',
       '/styles/main.min.css',
       '/scripts/main.min.js',
     ]);
   })
 );
});


import gulp from 'gulp';
import path from 'path';
import swPrecache from 'sw-precache';

const rootDir = '/';

gulp.task('generate-service-worker', callback => {
  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [
      // отслеживание и кэширование всех файлов для сравнения с этим шаблоном
      rootDir + '/**/*.{js,html,css,png,jpg,gif}',
    ],
    stripPrefix: rootDir
  }, callback);
});
