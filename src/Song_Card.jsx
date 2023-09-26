import React from "react";
import "./index.css";

document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    function playAudio() {
        audioPlayer.play();
    }

    function pauseAudio() {
        audioPlayer.pause();
    }

    function stopAudio() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    document.getElementById('play-btn').addEventListener('click', playAudio);
    document.getElementById('pause-btn').addEventListener('click', pauseAudio);
    document.getElementById('stop-btn').addEventListener('click', stopAudio);
});


function Song_Card(props)
{
   
    
    return(
        <>

<div className="card">
<img src={props.imgsrc} alt="Song_Poster"/>

<div className="player-container">
    <audio id="audio-player" controls source src={props.songsrc} type="video/youtube">
    
        Your browser does not support the audio element.
    </audio>
    <div className="controls">
        <button id="play-btn" className="control">Play</button>
        <button id="pause-btn" className="control">Pause</button>
        <button id="stop-btn" className="control">Stop</button>
    </div>
</div>
        <h4 className="title">{props.title}</h4>
        
       
</div>
       

        
        </>
    );
}

export default Song_Card;