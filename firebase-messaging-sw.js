importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Pakai config proyek baru Anda
firebase.initializeApp({
  apiKey: "AIzaSyDCgSdCqOCQiOL2Wk42DjQ3R_S4v2ndBUE",
  authDomain: "testing-notifikasi-e8936.firebaseapp.com",
  projectId: "testing-notifikasi-e8936",
  storageBucket: "testing-notifikasi-e8936.firebasestorage.app",
  messagingSenderId: "544881647344",
  appId: "1:544881647344:web:0bcaaf2b000791bbf32c35"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://flagcdn.com/w160/ar.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
