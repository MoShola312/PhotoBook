  import * as firebase from "firebase";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var config = {
    apiKey: "AIzaSyD0zFpTnw7-3I3X6OImSXPzan_-savEkyA",
    authDomain: "photobook-9e76c.firebaseapp.com",
    databaseURL: "https://photobook-9e76c-default-rtdb.firebaseio.com",
    projectId: "photobook-9e76c",
    storageBucket: "photobook-9e76c.appspot.com",
    messagingSenderId: "350340440548",
    appId: "1:350340440548:web:aeb4180134644d3334e7f1",
    measurementId: "G-QE6Z7W1HXS"
  };
//   // Initialize Firebase
  firebase.initializeApp(config);


  const database = firebase.database()

  export {database}
