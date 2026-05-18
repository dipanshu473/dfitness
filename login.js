// LOGIN FORM

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function(e){

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "" || password === ""){

        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(
    '/api/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }
);
       
        const data = await response.json();

        if(response.ok){

            localStorage.setItem("userEmail", email);

            alert(data.message);

            window.location.href = "home.html";

        } else {

            alert(data.message);

        }

    } catch(error){

        console.log(error);

        alert("Server Error");

    }

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
