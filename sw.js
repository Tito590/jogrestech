self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window', includeUncontrolled: true}).then(function(clientList) {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow('./testnotifikasi.html');
        })
    );
});

// Menangani background push jika diperlukan di masa depan
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    event.waitUntil(
        self.registration.showNotification(data.title || "Update Skor", {
            body: data.body || "Cek aplikasi untuk detail.",
            icon: "https://flagcdn.com/w160/ar.png"
        })
    );
});
