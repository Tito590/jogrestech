importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "208387659179" // Sender ID Anda
});

const messaging = firebase.messaging();

// Menangkap notifikasi saat aplikasi di background/tutup
messaging.onBackgroundMessage((payload) => {
    console.log('Notifikasi masuk di background:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://flagcdn.com/w160/ar.png',
        badge: 'https://flagcdn.com/w96/ar.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
