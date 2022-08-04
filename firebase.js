// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnvyl6G91CyJ6kSEWC2xa6fcxRLpqFjmA",
  authDomain: "react-native-capstone-ce0e3.firebaseapp.com",
  projectId: "react-native-capstone-ce0e3",
  storageBucket: "react-native-capstone-ce0e3.appspot.com",
  messagingSenderId: "640273645217",
  appId: "1:640273645217:web:691df2b8d92f3115bfbae0"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}
const auth = firebase.auth()

export { auth };