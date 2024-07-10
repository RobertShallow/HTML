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
var count = 0;

function displayTable(id){
  var previewButton = document.getElementById("Preview-image");
  showTable = document.getElementById(id);
  
  count++;

  if (count==1){
    previewButton.src = "img/Cancel-Button.png";
    previewButton.classList.remove("PreviewImage-size");
    previewButton.classList.add("CancelImage-size");
    showTable.classList.remove("non-display-table");
    
 } 
  else {
    previewButton.src = "img/Preview-Button.png";
    previewButton.classList.remove("CancelImage-size");
    previewButton.classList.add("PreviewImage-size");
    showTable.classList.add("non-display-table");
    count = 0;
}
  
}
