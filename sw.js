// Service Worker untuk menangani notifikasi di latar belakang
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    // Saat notifikasi diklik, buka kembali halaman web
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(function(clientList) {
            if (clientList.length > 0) {
                return clientList[0].focus();
            }
            return clients.openWindow('./testnotifikasi.html');
        })
    );
});

// Menangani getaran dan tampilan agar lebih stabil di Android
self.addEventListener('push', function(event) {
    const data = event.data.json();
    self.registration.showNotification(data.title, data.options);
});
