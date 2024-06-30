//Music box
function playMusic() {
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

//Display Military March table 
  function displayWorld(){
  document.getElementById('Military-March-Preview').classList.toggle("non-display-table");
}

