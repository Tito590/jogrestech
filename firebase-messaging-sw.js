importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Inisialisasi dengan Project Number Anda
firebase.initializeApp({
    messagingSenderId: "208387659179"
});

const messaging = firebase.messaging();

// Handler notifikasi saat layar mati atau aplikasi di-minimize
messaging.onBackgroundMessage(function(payload) {
    console.log('Notifikasi Latar Belakang:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://flagcdn.com/w160/ar.png',
        badge: 'https://flagcdn.com/w96/ar.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
