let animationDone = false;

window.onload = function() {
    setTimeout(() => {
        fadeOutAnimation();
    }, 2500); // Wait for animation
};

function fadeOutAnimation() {
    if (!animationDone) {
        const anim = document.getElementById('animation');
        anim.style.transition = 'opacity 0.8s ease';
        anim.style.opacity = '0';
        setTimeout(() => {
            anim.style.display = 'none';
            document.getElementById('login-section').classList.remove('hidden');
            animationDone = true;
        }, 800);
    }
}

function skipAnimation() {
    fadeOutAnimation(); // Skip animation on click
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    if (password === '1234') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    } else {
        error.textContent = 'Incorrect password. Try again.';
    }
}
