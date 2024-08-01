document.addEventListener('DOMContentLoaded', () => {
  const audioPlayers = document.querySelectorAll('.audio-player');

  audioPlayers.forEach(audioPlayer => {
    const audio = audioPlayer.querySelector('.audio');
    const playPauseBtn = audioPlayer.querySelector('.play-btn');
    const progress = audioPlayer.querySelector('.progress');
    const progressContainer = audioPlayer.querySelector('.progress-container');
    const currentTimeEl = audioPlayer.querySelector('.current-time');
    const durationEl = audioPlayer.querySelector('.duration');

    // Cambia el icono de play/pause y reproduce/detiene el audio
    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.classList.add('playing');
      } else {
        audio.pause();
        playPauseBtn.classList.remove('playing');
      }
    });

    // Actualiza el progreso y el tiempo actual del audio
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;

      // Actualizar el tiempo actual y la duración
      currentTimeEl.textContent = formatTime(currentTime);
      durationEl.textContent = formatTime(duration);
    });

    // Evento para cuando el audio termina de reproducirse  
    audio.addEventListener('ended', () => {  
      // Restablecer el progreso y el botón de reproducción  
      progress.style.width = '0%';  
      playPauseBtn.classList.remove('playing');  
      currentTimeEl.textContent = '0:00';  
      audio.currentTime = 0;  
    });


    // Formatea el tiempo en minutos y segundos
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Permite hacer clic en la barra de progreso para cambiar la posición de reproducción
    progressContainer.addEventListener('click', (e) => {
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    });

    // Carga la duración del audio inicialmente
    audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
    });
  });
});