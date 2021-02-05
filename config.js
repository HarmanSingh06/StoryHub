import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDKKcpnQn-peQKDhv6cK_az0LV4PB5V91Y",
  authDomain: "storyhub-1da7a.firebaseapp.com",
  projectId: "storyhub-1da7a",
  storageBucket: "storyhub-1da7a.appspot.com",
  messagingSenderId: "365886825199",
  appId: "1:365886825199:web:b62928b22f74e0e708311a"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

 export default firebase.firestore();

