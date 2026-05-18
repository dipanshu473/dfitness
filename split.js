const cards = document.querySelectorAll('.split-card');

window.addEventListener('scroll', revealCards);

function revealCards(){

    const triggerBottom = window.innerHeight / 1.2;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.classList.add('show');
        }

    });
}

revealCards();

