// Import the functions you need from the SDKs you need
import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxRRkpKsQ4CzqXtX6dny-muaMvLtQIXdI",
  authDomain: "react-crud-547f5.firebaseapp.com",
  projectId: "react-crud-547f5",
  storageBucket: "react-crud-547f5.appspot.com",
  messagingSenderId: "998441790663",
  appId: "1:998441790663:web:efcbd4d64b078d1a1b62e2",
  measurementId: "G-MFJMJ7K06Z"
};

/* --------------------------- Initialize Firebase -------------------------- */
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getSelectionRange(app);
// const analytics = getAnalytics(app);

export { app, firestore, storage };