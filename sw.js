self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://tito590.github.io/jogrestech/testnotifikasi.html')
    );
});