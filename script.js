// Show animation first, then login section
window.onload = function() {
    setTimeout(() => {
        document.getElementById('animation').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }, 2500); // 2.5 seconds delay
};

function checkPassword() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    if (password === '1234') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        error.textContent = 'Incorrect password. Try again.';
    }
}
