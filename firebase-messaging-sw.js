importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDCgSdCqOCQiOL2Wk42DjQ3R_S4v2ndBUE", //
  projectId: "testing-notifikasi-e8936", //
  messagingSenderId: "544881647344", //
  appId: "1:544881647344:web:0bcaaf2b000791bbf32c35
" //
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "Update Skor";
  const notificationOptions = {
    body: payload.notification.body || "Cek hasil pertandingan sekarang!",
    icon: 'https://flagcdn.com/w160/ar.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
