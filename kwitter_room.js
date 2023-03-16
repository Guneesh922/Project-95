
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAupVKj18zpp1KSXl1JIg24_ejHyIFO9-Y",
      authDomain: "class-test-85860.firebaseapp.com",
      databaseURL: "https://class-test-85860-default-rtdb.firebaseio.com",
      projectId: "class-test-85860",
      storageBucket: "class-test-85860.appspot.com",
      messagingSenderId: "152823772812",
      appId: "1:152823772812:web:b6e39e9b14a941da36eda9",
      measurementId: "G-V4TVZHJD5P"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"  + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"      
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
