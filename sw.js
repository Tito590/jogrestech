const CACHE_NAME = 'skorbola-v1';
const assets = [
  'testnotifikasi.html',
  'https://flagcdn.com/w192/id.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Respon Notifikasi agar muncul di sistem
self.addEventListener('message', event => {
  if (event.data.type === 'SHOW_WIDGET') {
    const options = {
      body: event.data.message,
      icon: 'https://flagcdn.com/w192/id.png',
      badge: 'https://flagcdn.com/w192/id.png',
      tag: 'live-score',
      renotify: false,
      ongoing: true // Membuat notifikasi tidak bisa di-swipe (seperti widget)
    };
    self.registration.showNotification(event.data.title, options);
  }
});
