// Simulated user data for demonstration purposes
let currentUser = null;
let cart = [];
let wishlist = [];

// Function to handle user login
function loginUser(username, password) {
    // Simulated authentication logic
    // In a real-world scenario, you would perform this on the server
    if (username === 'user' && password === 'password') {
        currentUser = username;
        alert(`Welcome back, ${currentUser}!`);
        updateNavigation();
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle user signup
function signupUser(newUsername, newPassword) {
    // Simulated user registration logic
    // In a real-world scenario, you would perform this on the server
    currentUser = newUsername;
    alert(`Welcome, ${currentUser}! You have successfully signed up.`);
    updateNavigation();
}

// Function to handle user logout
function logoutUser() {
    currentUser = null;
    alert('You have been logged out.');
    updateNavigation();
}

// Function to update the navigation bar based on user authentication status
function updateNavigation() {
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const logoutLink = document.getElementById('logout-link');
    const usernameDisplay = document.getElementById('username-display');

    if (currentUser) {
        // User is logged in
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'inline';
        usernameDisplay.textContent = `Welcome, ${currentUser}!`;
    } else {
        // User is not logged in
        loginLink.style.display = 'inline';
        signupLink.style.display = 'inline';
        logoutLink.style.display = 'none';
        usernameDisplay.textContent = '';
    }
}

// Placeholder for addToCart function
function addToCart(productName, price) {
    // Simulated add to cart logic
    // In a real-world scenario, you would perform this on the server
    if (currentUser) {
        cart.push({ name: productName, price: price });
        alert(`${productName} added to cart! Price: $${price}`);
    } else {
        alert('Please log in to add items to your cart.');
    }
}

// Placeholder for addToWishlist function
function addToWishlist(productName) {
    // Simulated add to wishlist logic
    // In a real-world scenario, you would perform this on the server
    if (currentUser) {
        wishlist.push(productName);
        alert(`${productName} added to wishlist!`);
    } else {
        alert('Please log in to add items to your wishlist.');
    }
}

// Handle document load event to initialize the navigation bar
document.addEventListener('DOMContentLoaded', function () {
    updateNavigation();
});
// script.js
// Common JavaScript functions
function logoutUser() {
    // Implement logout functionality
    console.log("User logged out");
}

function addToCart(productName, price) {
    // Implement add to cart functionality
    console.log(`${productName} added to cart for $${price}`);
}

function addToWishlist(productName) {
    // Implement add to wishlist functionality
    console.log(`${productName} added to wishlist`);
}

function showPage(pageId) {
    // Implement show page functionality
    console.log(`Showing page: ${pageId}`);
}
// script.js
// Common JavaScript functions

document.addEventListener('DOMContentLoaded', function () {
    // Check if a user is logged in
    const currentUser = getCurrentUser();
    if (currentUser) {
        greetUser(currentUser);
    }
});

function greetUser(username) {
    // Display a welcome message or perform other user-specific actions
    const greetingElement = document.getElementById('username-display');
    greetingElement.innerHTML = `Welcome, ${username}!`;
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('signup-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'inline-block';
}

function showPage(pageId) {
    const pages = ['index', 'about', 'products', 'feedback', 'support', 'login_signup'];

    pages.forEach(page => {
        const pageElement = document.getElementById(page);
        if (page === pageId) {
            pageElement.style.display = 'block';
        } else {
            pageElement.style.display = 'none';
        }
    });

    if (pageId === 'index') {
        // Check if a user is logged in
        const currentUser = getCurrentUser();
        if (currentUser) {
            greetUser(currentUser);
        }
    }
}
