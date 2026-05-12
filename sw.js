// Menangani klik pada notifikasi
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(function(clientList) {
            // Jika aplikasi sudah terbuka, fokuskan saja
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if ('focus' in client) return client.focus();
            }
            // Jika tidak, buka halaman baru
            if (clients.openWindow) return clients.openWindow('./testnotifikasi.html');
        })
    );
});

// Memastikan update service worker segera aktif
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
