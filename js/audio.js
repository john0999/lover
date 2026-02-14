function toggleMusic() {
    const audio = document.getElementById('audio');
    const btn = document.querySelector('.play-btn');

    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸️';
    } else {
        audio.pause();
        btn.textContent = '🎵';
    }
}
