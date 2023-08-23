console.log("Welcome to Spotify");
// intitialize the variable 
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
{songName : "alan walker", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
]
// audioElement.play();

// handle play/pause click 
masterPlay.addEventListener('click', ()=>{
})
// listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seekbar
})

