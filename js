//Music box
function togglePlay() {
  var audio = document.getElementById("audio");
  var musicButton = document.getElementById("music-button");
  var musicIcon = document.getElementById("music-icon");

  if (audio.paused) 
  {
      audio.play();
      musicIcon.src = "img/music-on.png"; // Path to the music-on image
  } 
  else
  {
      audio.pause();
      musicIcon.src = "img/music-off.png"; // Path to the music-off image
  }
}
