/* Go to top button */
let topPage = document.querySelector('#top-btn');
topPage.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})

/* Youtube video pop up */
const videoBox = document.querySelector('.video-box');
const playButton = document.querySelectorAll('.play-btn');
const mainBox = document.querySelectorAll('.main-image');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', openClose);

for(let i=0; i<playButton.length; i++){
    playButton[i].addEventListener('click', openClose);
}

function openClose(){
    videoBox.classList.toggle('active');
}

/* Animate on scroll */
AOS.init({
    duration:2500
});