function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value);

  if (isNaN(weight) || isNaN(height)) {
    alert('Please enter valid values for weight and height.');
    return;
  }

  const bmi = weight / (height ** 2);
  const result = document.querySelector('.result');
  result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'You are underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'You have normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'You are overweight';
  } else {
    bmiCategory = 'You are obese';
  }

  sessionStorage.setItem('bmi', bmi);
  sessionStorage.setItem('bmiCategory', bmiCategory);

  window.location.href = `Fupsin2.html?bmi=${bmi}&category=${bmiCategory}`;
}




