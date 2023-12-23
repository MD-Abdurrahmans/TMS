// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdp0m7gONTBmWrobXQSHn3HcXb5CA09SU",
  authDomain: "taskmanagement-f6c08.firebaseapp.com",
  projectId: "taskmanagement-f6c08",
  storageBucket: "taskmanagement-f6c08.appspot.com",
  messagingSenderId: "508742805300",
  appId: "1:508742805300:web:cd034f2c98cfd5049f6761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth