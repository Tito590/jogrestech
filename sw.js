self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Listener untuk memunculkan notifikasi
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PUSH_NOTIF') {
        const title = event.data.title;
        const options = {
            body: event.data.body,
            icon: "https://flagcdn.com/w160/ar.png",
            badge: "https://flagcdn.com/w96/ar.png",
            vibrate: [500, 100, 500],
            tag: 'skor-update', // Menghindari tumpukan notifikasi
            renotify: true,
            data: { url: './testnotifikasi.html' }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow(event.notification.data.url);
        })
    );
});
