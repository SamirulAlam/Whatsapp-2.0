import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHHB7bRXlrMw2BXChDt9VtVPWSoasd8dc",
    authDomain: "whatsapp-2-7e4e2.firebaseapp.com",
    projectId: "whatsapp-2-7e4e2",
    storageBucket: "whatsapp-2-7e4e2.appspot.com",
    messagingSenderId: "1055296594440",
    appId: "1:1055296594440:web:b5ba1b0f21a7d8e5d627bd"
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db =app.firestore();
  const auth=app.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider,db};