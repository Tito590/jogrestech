// Service Worker untuk menangani interaksi notifikasi
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(function(clientList) {
            // Fokus ke tab yang sudah terbuka jika ada
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if ('focus' in client) return client.focus();
            }
            // Jika tidak ada, buka halaman baru
            if (clients.openWindow) return clients.openWindow('./testnotifikasi.html');
        })
    );
});

// Memastikan Service Worker segera aktif
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
});
