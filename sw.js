self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(function(clientList) {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow('./testnotifikasi.html');
        })
    );
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});
