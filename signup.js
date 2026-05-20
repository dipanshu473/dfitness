const registerForm =
document.getElementById('registerForm');

registerForm.addEventListener(
    'submit',
    async function(e){

    e.preventDefault();

    const name =
    document.getElementById('name').value;

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;

    if(
        name === "" ||
        email === "" ||
        password === ""
    ){

        alert("Please fill all fields");
        return;
    }

    try{

        const response = await fetch(
            '/api/signup',
            {
                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if(response.ok){

            alert(data.message);

            window.location.href =
            "login.html";

        }else{

            alert(data.message);
        }

    }catch(error){

        console.log(error);

        alert("Server Error");
    }

});
