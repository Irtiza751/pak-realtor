// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJu0d-jhZNOQDFoKti_lIo7blq6wM8-r8",
  authDomain: "pakrealter.firebaseapp.com",
  projectId: "pakrealter",
  storageBucket: "pakrealter.appspot.com",
  messagingSenderId: "483902408752",
  appId: "1:483902408752:web:d41dca20e0d2e1a06bc5f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
