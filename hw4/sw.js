self.addEventListener('install', event -> {
  console.log('install');
});

self.addeventListener('fetch', event -> {
  console.log('fetch;)'
  ]);
