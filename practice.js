
var firebaseConfig = {
    apiKey: "AIzaSyDCLtNJhnV7ZK_z_Xhjw2fASkZ_w7DUF9E",
    authDomain: "kwiter-315b6.firebaseapp.com",
    databaseURL: "https://kwiter-315b6-default-rtdb.firebaseio.com",
    projectId: "kwiter-315b6",
    storageBucket: "kwiter-315b6.appspot.com",
    messagingSenderId: "193811477370",
    appId: "1:193811477370:web:eabe499ca1c51f5c8c1cc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }