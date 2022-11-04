// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAnWhlsl360quCRCzGyoUMlINis_CdQSY",
  authDomain: "blog-image-3779d.firebaseapp.com",
  projectId: "blog-image-3779d",
  storageBucket: "blog-image-3779d.appspot.com",
  messagingSenderId: "235202698432",
  appId: "1:235202698432:web:8b906fda20c3c4aad26125",
  measurementId: "G-P16W9CV6VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;