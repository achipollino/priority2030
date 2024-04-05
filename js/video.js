// Функция для открытия модального окна с видео
// Функция для открытия модального окна с видео
function openVideoModal() {
  var modal = document.getElementById('video-modal');
  var video = document.getElementById('modal-video');

  // Включаем полноэкранный режим для видео
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.msRequestFullscreen();
  }

  modal.style.display = 'block';

  // Заблокировать прокрутку фона
  document.body.style.overflow = 'hidden';
}

// Функция для закрытия модального окна с видео
function closeVideoModal() {
  var modal = document.getElementById('video-modal');
  modal.style.display = 'none';

  // Разблокировать прокрутку фона
  document.body.style.overflow = 'auto';

  // Остановить воспроизведение видео при закрытии модального окна
  var video = document.getElementById('modal-video');
  video.pause();
}
