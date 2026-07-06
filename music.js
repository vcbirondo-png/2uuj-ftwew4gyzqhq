const player = document.getElementById("player");

const songs = [
    "music/lofi.mp3",
    "music/rain.mp3",
    "music/piano.mp3"
];

let currentSong = 0;

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    player.src = songs[currentSong];
    player.play();

}