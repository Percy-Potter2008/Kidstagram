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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + " !";
function addroom() {
   room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="index2.html"
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot){
      childKey=childSnapshot.key;
      Room_names=childKey;
      console.log("roomname" + Room_names);
      row="<div class='room_name' id="+Room_names" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;});});}
getData();
