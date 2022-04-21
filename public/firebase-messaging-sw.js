importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDcozaEYbaLxHhZ_haJJVGIZCIy7Ai8YRE",
    authDomain: "blogeekplatzi-9d7b3.firebaseapp.com",
    projectId: "blogeekplatzi-9d7b3",
    storageBucket: "blogeekplatzi-9d7b3.appspot.com",
    messagingSenderId: "68896446890",
    appId: "1:68896446890:web:60c48ee8cf52d30d86b3d3",
    measurementId: "G-7WBKKRZSFP"
  })


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });


firebase.messaging().setBackgroundMessageHandler((result) => {
    console.log("background ",result);
})
