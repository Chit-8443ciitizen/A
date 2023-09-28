// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN45ttOvM1TC-4TCTvS_-NuHR5oPc89i8",
  authDomain: "ecmascript-ed1df.firebaseapp.com",
  databaseURL: "https://ecmascript-ed1df-default-rtdb.firebaseio.com",
  projectId: "ecmascript-ed1df",
  storageBucket: "ecmascript-ed1df.appspot.com",
  messagingSenderId: "850062603860",
  appId: "1:850062603860:web:c73a3d7200e0224d5d1fc1",
  measurementId: "G-D452PMQPJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 // Khởi tạo Firebase
 firebase.initializeApp(firebaseConfig);