let video = document.querySelector('.video-playing');
let playButton = document.querySelector('.control').querySelector('.play-button');
let playImage = playButton.querySelector('img');
let fullScreenButton = document.querySelector('.full-screen-button');


function togglePlay() {
  if(video.paused) {
    playImage.src = "./images/pause-solid.svg";
    video.play();
  } else {
    playImage.src = "./images/play-solid.svg";
    video.pause();
  }
}

function toggleFullScreen() {
  video.requestFullscreen();
}

playButton.addEventListener('click', togglePlay);
fullScreenButton.addEventListener('click', toggleFullScreen);