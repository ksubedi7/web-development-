const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function(){

  if(video.paused){
    video.play();
    playBtn.innerHTML = "❚❚"; // pause icon
  }
  else{
    video.pause();
    playBtn.innerHTML = "▶"; // play icon
  }

});