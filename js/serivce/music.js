'use strict';
const allSong = [
    {
        singer : "bensound",
        song : "thejazzpiano",
        path : "bensound - thejazzpiano.mp3"
    },
    {
        singer : "Chiro",
        song : "Slump",
        path : "Chiro_ Slump.mp3"
    },
    {
        singer : "DJ Quads",
        song : "At My Front Door",
        path : "DJ Quads - At My Front Door.mp3"
    },
    {
        singer : "lukrembo",
        song : "jazz beat music",
        path : "lukrembo - jazz beat music.mp3"
    },
    {
        singer : "No Copyright",
        song : "Chill Lofi Music",
        path : "No Copyright - Chill Lofi Music.mp3"
    },
    {
        singer : "Ryan",
        song : "Milk Coffee",
        path : "Ryan_ Milk Coffee.mp3"
    }
];

const audioPlayer = document.querySelector("#audioContainer");
const musicName = document.querySelector(".footer-music__name");
const playButton =  document.querySelector(".footer-music__player--play");

let index = 0;
let playingSong = false;

function loadMusic() {
    audioPlayer.src = `music/${allSong[index].path}`;
    musicName.innerText = `${allSong[index].singer} - ${allSong[index].song}`;
    audioPlayer.load();
}

function playMusic() {
    audioPlayer.play();
    playingSong = true;
    playButton.innerText = "pause";
}

function pauseMusic() {
    audioPlayer.pause();
    playingSong = false;
    playButton.innerText = "play_arrow";
}

function justPlay() {
    playingSong === false ? playMusic() : pauseMusic();
}

function nextMusic() {
    index < allSong.length -1 ? index += 1 : index = 0;
    loadMusic(index);
    playMusic();
}

function previousMusic() {
    index > 0 ? index -= 1 : index = allSong.length-1;
    loadMusic(index);
    playMusic();
}

function changeVolume(event) {
    console.log(event.target.value);
    const volume = document.querySelector(".footer-music__volume").value;
    audioPlayer.volume = volume / 100;
}

export { loadMusic, justPlay, nextMusic, previousMusic, changeVolume };