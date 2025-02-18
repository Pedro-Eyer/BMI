const calculate = document.getElementById('calculate');

function BMI() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        const valorBMI = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valorBMI < 18.5) {
            classification = 'underweight.';
        } else if (valorBMI < 25) {
            classification = 'with ideal weight. Congratulations!';
        } else if (valorBMI < 30) {
            classification = 'slightly overweight.';
        } else if (valorBMI < 35) {
            classification = 'with grade I obesity.';
        } else if (valorBMI < 40) {
            classification = 'with grade II obesity.';
        } else {
            classification = 'with grade III obesity. Careful!';
        }

        result.textContent = `${name} your BMI is ${valorBMI} and you are ${classification}`;
    } else {
        result.textContent = 'Fill in all the fields!';
    }
}

calculate.addEventListener('click', BMI);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        BMI();
    }
});

