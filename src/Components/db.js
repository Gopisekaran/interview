import Firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyABeU5FWiJOmua-Vc1edMcAtI0608zC3Q4",
  authDomain: "scanqr-86efa.firebaseapp.com",
  databaseURL: "https://scanqr-86efa.firebaseio.com",
  projectId: "scanqr-86efa",
  storageBucket: "scanqr-86efa.appspot.com",
  messagingSenderId: "974523805152",
  appId: "1:974523805152:web:dd6f5633b04ae6ecfc4f85",
  measurementId: "G-WTPC5H616X"
};
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
