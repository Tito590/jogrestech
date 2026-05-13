importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "208387659179"
});

const messaging = firebase.messaging();

// Handler sederhana untuk memastikan tidak ada error syntax
messaging.onBackgroundMessage((payload) => {
    const title = payload.notification.title || "Skor Baru!";
    const options = {
        body: payload.notification.body || "Cek aplikasi sekarang",
        icon: "https://flagcdn.com/w160/ar.png"
    };
    return self.registration.showNotification(title, options);
});
