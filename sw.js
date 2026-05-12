self.addEventListener('push', function(event) {
    // Digunakan jika nanti pakai server asli
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});

// Fungsi untuk memastikan notifikasi muncul dengan prioritas tinggi
self.onmessage = (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = "GOL!! ⚽";
        const options = {
            body: "Messi 78'\nArgentina 2 - 1 Prancis",
            icon: "https://flagcdn.com/w160/ar.png",
            badge: "https://flagcdn.com/w96/ar.png",
            vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40],
            data: { dateOfArrival: Date.now() },
            // Ini kunci utamanya:
            tag: "goal-alert",
            renotify: true,
            requireInteraction: true,
            // Menambah level kepentingan
            priority: 2 // High Priority
        };
        self.registration.showNotification(title, options);
    }
};
