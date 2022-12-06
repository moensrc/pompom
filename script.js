var buttonFly = document.getElementById('button_fly');
var buttonEat = document.getElementById('button_eat');
var buttonFight = document.getElementById('button_fight');
var video = document.getElementById('video');


buttonFly.addEventListener('click', playFlyVideo);
buttonEat.addEventListener('click', playEatVideo);
buttonFight.addEventListener('click', playFightVideo);

function playFlyVideo() {
    video.src = "./videos/flying-animation.mp4";
    video.muted = false;
}

function playEatVideo() {
    video.src = "./videos/pompom-eating.mp4";
    video.muted = false;
}

function playFightVideo() {
    video.src = "./videos/pompom-fighting.mp4";
    video.muted = false;
}
