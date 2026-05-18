// LOGIN FORM

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "" || password === ""){

        alert("Please fill all fields");
        return;
    }

    // Save User

    localStorage.setItem("userEmail", email);

    // Success Message

    alert("Login Successful");

    // Redirect

    window.location.href = "home.html";

});



// INPUT ANIMATION

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    input.addEventListener('focus', () => {

        input.style.boxShadow =
        "0 0 10px rgba(241,196,15,0.4)";

    });

    input.addEventListener('blur', () => {

        input.style.boxShadow = "none";

    });

});