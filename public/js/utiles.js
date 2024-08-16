let firebaseConfig = {
    apiKey: "AIzaSyAOgjeOLyvFi0k9cdl6CC1hb30L1CHVByw",
    authDomain: "blog-beb67.firebaseapp.com",
    projectId: "blog-beb67",
    storageBucket: "blog-beb67.appspot.com",
    messagingSenderId: "921095025882",
    appId: "1:921095025882:web:71281452c89ba3a116a1e3",
    measurementId: "G-K1YGMRQP2B"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();