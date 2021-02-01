import firebase from 'firebase'
// import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyAiGgKyPdTV8uJFMRGt23PD_ByokkbRBhY",
    authDomain: "reto-pokemon.firebaseapp.com",
    projectId: "reto-pokemon",
    storageBucket: "reto-pokemon.appspot.com",
    messagingSenderId: "102580933802",
    appId: "1:102580933802:web:b3170e2d6236a85990acd3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({timestampsInSnapshots:true});
  export default firebaseApp.firestore();