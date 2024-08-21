import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIJ8a3ODwLATorR1VzAL7Dwwplx0ku1PQ",
  authDomain: "attendifyx-202400.firebaseapp.com",
  projectId: "attendifyx-202400",
  storageBucket: "attendifyx-202400.appspot.com",
  messagingSenderId: "959952736366",
  appId: "1:959952736366:web:b87858ab98d8869677967f",
  measurementId: "G-C0F0P14XRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Authenticate the user with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            console.log('User logged in:', user);

            // Redirect to the homepage or another page after login
            window.location.href = 'dashboard.html';  // Redirect to homepage
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during login:', errorCode, errorMessage);
            alert('Login failed: ' + errorMessage);  // Show error message to the user
        });
});
