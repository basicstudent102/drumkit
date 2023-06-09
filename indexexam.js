function playaudio (audioID){
 var audio = document.getElementById(audioID)
 audio.currentTime = 0
 audio.play()
}

document.addEventListener("keypress", function(event){
    key = event.key.toLocaleLowerCase();
        if (key === "w"|| key === "a" || key === "s"|| key === "d"|| key === "j"|| key === "k" || key === "l")
        playaudio("audio-" + key)
    
});

document.addEventListener("keypress", function( event ){
switch (event.key.toLocaleLowerCase) {
    case "w":
     playaudio("audio-w")
        break;
    case "a":
     playaudio("audio-a")
        break;
    case "s":
     playaudio("audio-s")
        break;
    case "d":
     playaudio("audio-d")
        break;
    case "j":
     playaudio("audio-")
        break;
    case "k":
     playaudio("audio-k")
        break;
    case "l":
     playaudio("audio-l")
        break;
    }
});

