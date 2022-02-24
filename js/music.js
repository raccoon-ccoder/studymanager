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
const playButton =  document.querySelector(".footer-music__player--play");
const previousButton = document.querySelector(".footer-music__player--previous");
const NextButton = document.querySelector(".footer-music__player--skip");
const musicName = document.querySelector(".footer-music__name");
const volumeChanger = document.querySelector(".footer-music__volume");

let index = 0;
let playingSong = false;

audioPlayer.addEventListener("ended", nextMusic);
playButton.addEventListener("click", justPlay);
previousButton.addEventListener("click", previousMusic);
NextButton.addEventListener("click", nextMusic);
volumeChanger.addEventListener("change", changeVolume);

function loadMusic(index) {
    audioPlayer.src = `music/${allSong[index].path}`;
    musicName.innerText = `${allSong[index].singer} - ${allSong[index].song}`;
    audioPlayer.load();
}

loadMusic(index);

function playMusic() {
    audioPlayer.play();
    playingSong = true;
    playButton.innerText = "pause";
}

function isMusicOver() {
    nextMusic();
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
    index > 0 ? index -= 1 : index = allSong.length;
    loadMusic(index);
    playMusic();
}

function changeVolume() {
    const volume = document.querySelector(".footer-music__volume").value;
    audioPlayer.volume = volume / 100;
}
