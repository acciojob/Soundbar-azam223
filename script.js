// Function to play audio
function playSound(soundName) {
    const audio = document.getElementById("audio");
    audio.src = "sounds/" + soundName;
    audio.play();
}

// Function to stop audio
function stopSound() {
    const audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
}
