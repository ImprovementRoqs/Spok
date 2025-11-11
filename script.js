/* Dark Mode */
body {
    background-color: #121212;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* Animation Section */
#animation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.animated-text {
    font-size: 4em;
    font-weight: bold;
    animation: fadeScale 2.5s forwards, glowPulse 2.5s infinite;
    text-shadow: 0 0 10px #fff, 0 0 20px #00f, 0 0 30px #0ff;
}

@keyframes fadeScale {
    0% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes glowPulse {
    0% { text-shadow: 0 0 10px #fff, 0 0 20px #00f, 0 0 30px #0ff; }
    50% { text-shadow: 0 0 20px #fff, 0 0 40px #00f, 0 0 60px #0ff; }
    100% { text-shadow: 0 0 10px #fff, 0 0 20px #00f, 0 0 30px #0ff; }
}

/* Hidden class */
.hidden {
    display: none;
}

/* Login Section */
#login-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    padding: 10px;
    margin: 10px;
    background-color: #1e1e1e;
    color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    text-align: center;
}

button {
    padding: 10px 15px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
