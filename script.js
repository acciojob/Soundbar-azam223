//your JS code here. If required.
function playSound(soundName) {
    const audio = document.getElementById("audio");
    audio.src = "sounds/" + soundName;
    audio.play();
}

function stopSound() {
    const audio = document.getElementById("audio");
    audio.pause();
}
