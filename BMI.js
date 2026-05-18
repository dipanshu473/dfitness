
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