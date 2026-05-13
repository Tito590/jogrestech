self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Mendengarkan pesan dari aplikasi utama saat ada data baru
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title;
        const options = {
            body: event.data.body,
            icon: "https://images.bisnis.com/posts/2024/07/26/1784651/le_minerale_1721984174.png",
            badge: "https://images.bisnis.com/posts/2024/07/26/1784651/le_minerale_1721984174.png",
            vibrate: [500, 100, 500],
            tag: 'bola-notif',
            renotify: true,
            data: { url: './testnotifikasi.html' }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

// Ketika notifikasi diklik, buka kembali aplikasi
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow(event.notification.data.url);
        })
    );
});
