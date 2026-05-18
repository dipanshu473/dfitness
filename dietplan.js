// DIET CARD ANIMATION

const dietCards = document.querySelectorAll('.diet-card');

window.addEventListener('scroll', showCards);

function showCards(){

    const triggerBottom = window.innerHeight / 1.2;

    dietCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add('show');
        }

    });

}

showCards();



// BUTTON ALERT

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        alert('Diet Plan Opened Successfully');

    });

});