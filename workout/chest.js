// VIDEO CARD ANIMATION

const videoCards = document.querySelectorAll('.video-card');

window.addEventListener('scroll', revealVideos);

function revealVideos(){

    const triggerBottom = window.innerHeight / 1.2;

    videoCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add('show');
        }

    });

}

revealVideos();



// VIDEO AUTO PAUSE

const videos = document.querySelectorAll('video');

videos.forEach(video => {

    video.addEventListener('play', () => {

        videos.forEach(otherVideo => {

            if(otherVideo !== video){

                otherVideo.pause();

            }

        });

    });

});



// LOADING EFFECT

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "0.5s";