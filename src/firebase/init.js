import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD6j5eCMEwNTcoHsFc7ImQSiF2SirQxNcc",
  authDomain: "udemy-ninja-smoothies-c59b7.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-c59b7.firebaseio.com",
  projectId: "udemy-ninja-smoothies-c59b7",
  storageBucket: "udemy-ninja-smoothies-c59b7.appspot.com",
  messagingSenderId: "867226102005",
  appId: "1:867226102005:web:6043857a144899e5e77dbc",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export FireStore Database

export default firebaseApp.firestore();
