//Play the sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running
    audio.currentTime = 0; // Rewind Time to play over with every hit
    audio.play();
    key.classList.add('playing');
}
// Remove the playing class
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if itsd not transform

    this.classList.remove('playing');
}
// Select the transition from the key class and listen for the end
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// play sound when the key goes down
window.addEventListener('keydown', playSound);