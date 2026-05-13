// Gunakan versi 8.10.1 yang stabil
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "208387659179" // Sender ID kamu sudah benar
});

const messaging = firebase.messaging();

// Background handler
messaging.onBackgroundMessage((payload) => {
    console.log('Pesan Background:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://flagcdn.com/w160/ar.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
