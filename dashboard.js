const storedEmail = localStorage.getItem('userEmail');
const welcomeMsg = document.getElementById('welcome-msg');
if (storedEmail) {
    welcomeMsg.textContent = `Logged in as: ${storedEmail}`;
} else {

    window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    window.location.href = "login.html";
}

