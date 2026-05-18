loginForm.addEventListener('submit', async function(e){

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/auth/login',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({
            email,
            password
        })

    });

    const data = await response.json();

    alert(data.message);

    if(response.ok){

        window.location.href = 'home.html';
    }

});


// login.js 

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