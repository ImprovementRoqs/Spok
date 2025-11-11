function checkPassword() {
    password = document.getElementById('password').value;
    const error = document.getElementById('error');
    if (password === '1234') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        error.textContent = 'Incorrect password. Try again.';
    }
}
