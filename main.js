const startBtn     = document.getElementById('startBtn');
const landing      = document.getElementById('landing');
const videoSection = document.getElementById('videoSection');
const introVideo   = document.getElementById('introVideo');
const enterHomeBtn = document.getElementById('enterHomeBtn');

let hasLooped = false;

startBtn.addEventListener('click', () => {
  // 1) Hide landing, show video section
  landing.style.display = 'none';
  videoSection.style.display = 'block';

  // 2) Play the video (with audio allowed by click gesture)
  introVideo.play().catch(console.error);

  // 3) Listen for timeupdate to loop & reveal button
  introVideo.addEventListener('timeupdate', onTimeUpdate);
});

function onTimeUpdate() {
  if (!hasLooped && introVideo.currentTime >= 7) {
    hasLooped = true;

    // Loop video
    introVideo.currentTime = 0;
    introVideo.play().catch(console.error);

    // Reveal "Enter Home" link:
    //  - remove the hidden class (makes it display:block)
    //  - add .visible (fades in opacity)
    enterHomeBtn.classList.remove('hidden');
    enterHomeBtn.classList.add('visible');
  }
}
