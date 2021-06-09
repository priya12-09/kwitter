
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCF0DRcmilhQ22DrnJfA9uZHDtlttBveRg",
      authDomain: "classtest-1f346.firebaseapp.com",
      projectId: "classtest-1f346",
      storageBucket: "classtest-1f346.appspot.com",
      messagingSenderId: "660557325549",
      appId: "1:660557325549:web:4a513ef1cdd5f9f6d618e4",
      measurementId: "G-LW7RG8P6KG"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name-" + Room_names);
        row="<div class='room_name  id="+Room_names+"  onclick='redirectToRoomName(this.id)' >#"+ Room_names + " </div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}

function redirectToRoomName() {
      console.log (name);
      localStorage.setItem("room_name" , name );
      window.location = "kwitter_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem  ("room_name");
     window.location= "kwitter.html";
     
}
