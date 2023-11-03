//your JS code here. If required.

// Function to preload audio for Cypress tests
function preloadAudio(soundName) {
    const audio = new Audio("sounds/" + soundName);
    audio.load();
}

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

// Preload audio files for Cypress tests
preloadAudio("sound1.mp3");
preloadAudio("sound2.mp3");
