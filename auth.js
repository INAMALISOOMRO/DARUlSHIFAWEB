/**
 * Handles the login form submission.
 * This is the central authentication logic for the entire portal.
 */
function handleLogin(event) {
    // Prevent the form from actually submitting and reloading the page
    event.preventDefault();

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // --- Define your employee credentials and roles here ---
    // In a real application, this would come from a secure server.
    const users = {
        'admin': {
            pass: 'admin123',
            role: 'admin', // Can access everything
            name: 'Administrator'
        },
        'inam':{
            pass: 'admin123',
            role: 'admin', // Can access everything
            name: 'Administrator INAM  ALI SOOMRO'

        },
        'reception': {
            pass: 'recpass456',
            role: 'reception', // Can only access Patient Records
            name: 'Reception Staff'
        },
        'pharmacist': {
            pass: 'medpass123',
            role: 'pharmacy', // Can only access Pharmacy
            name: 'Pharmacy Staff'
        }
    };

    // Check if the username exists and the password matches
    if (users[username] && users[username].pass === password) {
        // --- Login Successful ---
        errorMessage.textContent = ''; // Clear any previous error messages

        // Store user info in sessionStorage to keep them logged in
        sessionStorage.setItem('loggedInUser', users[username].name);
        sessionStorage.setItem('loggedInRole', users[username].role);

        // Redirect to the central dashboard
        window.location.href = 'dashboard.html';

    } else {
        // --- Login Failed ---
        // If credentials are wrong, show an error message
        errorMessage.textContent = 'Invalid username or password.';
    }
}