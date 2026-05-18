// ==========================
// D FITNESS MAIN SCRIPT
// ==========================


// LOGIN FORM

const loginForm = document.getElementById('loginForm');

if(loginForm){

    loginForm.addEventListener('submit', function(e){

        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email === "" || password === ""){

            alert("Please fill all fields");

        }else{

            localStorage.setItem("userEmail", email);

            alert("Login Successful");

            window.location.href = "home.html";
        }

    });

}



// CONTACT FORM

const contactForm = document.getElementById('contactForm');

if(contactForm){

    contactForm.addEventListener('submit', function(e){

        e.preventDefault();

        alert("Message Sent Successfully");

        contactForm.reset();

    });

}



// NAVBAR ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});



// FADE ANIMATION ON SCROLL

const fadeElements = document.querySelectorAll(".card, .hero-content, .contact-box");

window.addEventListener("scroll", () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

});



// INITIAL ANIMATION STYLE

fadeElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";

});



// SIMPLE LOADING EFFECT

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "0.5s";



// BUTTON HOVER SOUND EFFECT OPTIONAL

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// BMI CALCULATOR

function calculateBMI(){

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if(height === "" || weight === ""){

        alert("Please enter height and weight");
        return;
    }

    const heightMeter = height / 100;

    const bmi = (weight / (heightMeter * heightMeter)).toFixed(1);

    document.getElementById('bmiResult').innerText =
    "Your BMI: " + bmi;

    let status = "";

    if(bmi < 18.5){

        status = "Underweight";

    }else if(bmi >= 18.5 && bmi < 24.9){

        status = "Normal Weight";

    }else if(bmi >= 25 && bmi < 29.9){

        status = "Overweight";

    }else{

        status = "Obese";
    }

    document.getElementById('bmiStatus').innerText =
    "Status: " + status;
}


// split starts here

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

