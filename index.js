function playAudio(audioId) {
  var audio = document.getElementById(audioId)
      audio.currentTime = 0;
      audio.play()
;}

document.addEventListener('keydown', function (event) {
  key = event.key.toLocaleLowerCase();
if ( key === "w"|| key === "a" || key === "s" || key === 'd'|| key === "j" || key === "k" || key === 'l')
playAudio("audio-" + key)
});

document.addEventListener('keydown', function (event) {
 switch (event.key.toLocaleLowerCase()) {
  case 'w':
    playAudio('audio-w')
    break;
  case 'a':
    playAudio('audio-a')
    break;
  case 's':
    playAudio('audio-s')
    break;
  case 'd':
    playAudio('audio-d')
    break;
  case 'j':
    playAudio('audio-j')
    break;
  case 'k':
    playAudio('audio-k')
    break;
  case 'l':
    playAudio('audio-l')
    break;
 } 
});