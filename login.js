// Show signup form
function showSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
}

// Simple signup function
function signupUser() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (!email || !password) {
        document.getElementById('signup-message').textContent = "Please fill all fields!";
        return;
    }
    // Save in localStorage for demo
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    document.getElementById('signup-message').textContent = "Account created successfully!";
}

// Login function
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if(email === storedEmail && password === storedPassword) {
        document.getElementById('login-message').style.color = 'green';
        document.getElementById('login-message').textContent = "Login successful! Redirecting...";
        // Redirect to dashboard page (create dashboard.html)
        setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
    } else {
        document.getElementById('login-message').style.color = 'red';
        document.getElementById('login-message').textContent = "Invalid email or password!";
    }
});