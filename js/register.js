import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Register the user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registration successful
            const user = userCredential.user;
            console.log('User registered:', user);

            // Show success message and redirect after the alert is closed
            alert('Registration successful! Redirecting to the homepage...');
            window.location.href = 'index.html';  // Redirect to the homepage
        })
        .catch((error) => {
            // Handle registration errors
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/email-already-in-use') {
                alert('This email is already in use. Please try logging in instead.');
            } else {
                console.error('Error during registration:', errorCode, errorMessage);
                alert(errorMessage);  // Show error message to the user
            }
        });
});
