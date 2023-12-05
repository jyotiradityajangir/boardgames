// auth.js
// Authentication functions
function loginUser() {
    // Implement login functionality
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`User ${username} logged in`);
    showPage('home');
}

function signupUser() {
    // Implement signup functionality
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    console.log(`User ${newUsername} signed up`);
    showPage('home');
}
// auth.js
// Authentication functions

let currentUser = null;

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated user authentication - Replace this with a proper authentication mechanism
    if (username === 'user' && password === 'password') {
        currentUser = username;
        console.log(`User ${username} logged in`);
        showPage('index');
    } else {
        alert('Invalid username or password');
    }
}

function signupUser() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Simulated user signup - Replace this with a proper signup mechanism
    currentUser = newUsername;
    console.log(`User ${newUsername} signed up`);
    showPage('index');
}

function logoutUser() {
    currentUser = null;
    console.log('User logged out');
    showPage('login_signup');
}

function getCurrentUser() {
    return currentUser;
}
