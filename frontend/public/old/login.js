const firebaseConfig = {
  apiKey: "AIzaSyDWIOHvH9VoVgG7WvEfo3FIX_2LHM9in1I",
  authDomain: "renalfd.firebaseapp.com",
  databaseURL: "https://renalfd-default-rtdb.firebaseio.com",
  projectId: "renalfd",
  storageBucket: "renalfd.appspot.com",
  messagingSenderId: "550250205126",
  appId: "1:550250205126:web:481e4b6757e0574df86cc7",
};

firebase.initializeApp(firebaseConfig);
var d = new Date();
document.getElementById("time").innerHTML = d;
const db = firebase.firestore();
const auth = firebase.auth();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

document.querySelector("#login").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      //console.log(auth.currentUser.email);
      window.location.href = `index.html?email=${auth.currentUser.email}`;

      signout();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in status");
    // document.getElementById("loginbutton").style.display = 'none';
  } else {
    // No user is signed in.
    console.log("not logged in", user);
  }
});

function signout() {
  // console.log(auth.currentUser);
  auth.signOut().then(() => {
    console.log("user logged out");
  });
}
