var buttonFly = document.getElementById("button_fly");
var buttonEat = document.getElementById("button_eat");
var buttonFight = document.getElementById("button_fight");
var buttonIdle = document.getElementById("button_idle");
var buttonMusic = document.getElementById("button_music");
var iconMusic = document.querySelector("div ul li:last-of-type button > img");
var video = document.getElementById("video");

var music = new Audio("./audio/music.mp3")

var footerImg = document.querySelector("footer > img");
var headerImg = document.querySelector("header > img");


// Add eventlisteners for all buttons to play videos
buttonFly.addEventListener("click", playFlyVideo);
buttonEat.addEventListener("click", playEatVideo);
buttonFight.addEventListener("click", playFightVideo);
buttonIdle.addEventListener("click", playIdleVideo);

function playFlyVideo() {
    video.src = "./videos/flying.mp4";
    video.muted = false;
    hideItems();
}

function playEatVideo() {
    video.src = "./videos/eating.mp4";
    video.muted = false;
    hideItems();
}

function playFightVideo() {
    video.src = "./videos/fighting.mp4";
    video.muted = false;
    hideItems();
}

function playIdleVideo() {
    video.src = "./videos/idle-animation.mp4";
    video.muted = true;
    footerImg.classList.remove("hide");
    // buttonMusic.classList.remove("hide");
}

// Add class hide to footer and musicbutton, changes opacity to 0
function hideItems() {
    footerImg.classList.add("hide");
    // buttonMusic.classList.add("hide");
}

buttonMusic.addEventListener("click", toggleMusic);

function toggleMusic() {
    if (music.duration > 0 && music.paused) {
        // Music is playing
        music.play();
        iconMusic.src = "./images/overlay_music-on.png";

    }
    else {
        // Music is not playing
        music.pause();
        iconMusic.src = "./images/overlay_music-off.png";
    }
}
