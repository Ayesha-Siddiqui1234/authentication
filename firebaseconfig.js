// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxQHVJbepbdUb2_icGAzew12Y8OfwrWm4",
  authDomain: "signing-d5cb8.firebaseapp.com",
  projectId: "signing-d5cb8",
  storageBucket: "signing-d5cb8.firebasestorage.app",
  messagingSenderId: "80630020420",
  appId: "1:80630020420:web:1271dde4e5439eaa9f7f11"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//signup function
function signUp(event){
    event.preventDefault();  //to stop reloading
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;

console.log(firstName,lastName,email,password,confirmPassword)

if(!firstName || !lastName || !email || !password || !confirmPassword){
  alert("please enter the all field");
  return;
}

if(password != confirmPassword){
alert("password is wrong try again!! password isnt not matched") ;
return;
}

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("sign up successfully");
      window.location.href="./login.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error,errorMessage);
      });
      document.getElementById("firstName").value=" ";
      document.getElementById("lastName").value=" ";
        document.getElementById("email").value=" ";
      document.getElementById("password").value=" ";
      document.getElementById("confirmPassword").value=" ";

}


//sign in function
function signIn(event){
  event.preventDefault();  //to stop reloading
 
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;


console.log(email,password)

if( !email || !password ){
alert("please enter the all field");
return;
}



signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Account has been LOGGED IN successfully");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error,errorMessage);
  });


}

//dom execution by using is
document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signUp");
  const signInButton= document.getElementById("signIn");

    if (signUpButton) {
      signUpButton.addEventListener("click", signUp);  //the function signUp is called which we defined in js file
    }
    if (signInButton) {
      signInButton.addEventListener("click", signIn);
    }
  });


