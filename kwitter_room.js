
const firebaseConfig = {
      apiKey: "AIzaSyBO0lib231tnN4FdUPPI5QkvpxeK3y7MIQ",
      authDomain: "p-93-9bb76.firebaseapp.com",
      databaseURL: "https://p-93-9bb76-default-rtdb.firebaseio.com",
      projectId: "p-93-9bb76",
      storageBucket: "p-93-9bb76.appspot.com",
      messagingSenderId: "676732048879",
      appId: "1:676732048879:web:e879fd6d9ac130876b121a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();
