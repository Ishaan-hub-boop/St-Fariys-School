var firebaseConfig = {
      apiKey: "AIzaSyAGyW-hDlda6BJN1Ed-wFxIOLcOvIvdNgE",
      authDomain: "st-fairy-s-school.firebaseapp.com",
      databaseURL: "https://st-fairy-s-school-default-rtdb.firebaseio.com",
      projectId: "st-fairy-s-school",
      storageBucket: "st-fairy-s-school.appspot.com",
      messagingSenderId: "342902876309",
      appId: "1:342902876309:web:8fb42123c232836ff8539c"
    };
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";  

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding_room_name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html"

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}