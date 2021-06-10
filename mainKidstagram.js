 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBY-76K3LBT3LEmOUeKkzqou1-4rxB5X2c",
    authDomain: "kidstagram-3a92c.firebaseapp.com",
    databaseURL: "https://kidstagram-3a92c-default-rtdb.firebaseio.com",
    projectId: "kidstagram-3a92c",
    storageBucket: "kidstagram-3a92c.appspot.com",
    messagingSenderId: "202592612252",
    appId: "1:202592612252:web:0f7ae177ff594059726259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function adduser() {
  username= document.getElementById("username").value;
 firebase.database().ref("/").child(username).update({
  purpose : "adding user"
 });
 localStorage.setItem("username", username);
 window.location="index2.html";
function addUser() { user_name = document.getElementById("user_name").value; localStorage.setItem("user_name", user_name); window.location = "index2.html"; 
