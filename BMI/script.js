function calculateBMI() {
    let heightElement = document.getElementById('height');
    let weightElement = document.getElementById('weight');
    let height = parseFloat(heightElement.value);
    let weight = parseFloat(weightElement.value);
    let showOutput = document.getElementById('output');
    let classification;

    // vymazani a upozorneni
    heightElement.setCustomValidity('');
    weightElement.setCustomValidity('');

    if (isNaN(height) || height <= 0) {
        heightElement.setCustomValidity('Zadejte výšku.');
        heightElement.reportValidity();
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        weightElement.setCustomValidity('Zadejte hmotnost.');
        weightElement.reportValidity();
        return;
    }
  
    // BMI kalkulacka
    let bmiRange = weight / (height / 100) ** 2; // BMI Formula
    bmiRange = bmiRange.toFixed(2);
  
    if (bmiRange < 18.5) {
      classification = 'Podváha';
    } else if (bmiRange > 18.5 && bmiRange < 25) {
      classification = 'Normální hmotnost';
    } else if (bmiRange > 25.1 && bmiRange < 30) {
      classification = 'Nadváha';
    } else if (bmiRange > 30.1 && bmiRange < 40) {
      classification = 'Obezita';
    } else if (bmiRange > 40) {
      classification = 'Morbidní obezita';
    }
    showOutput.innerHTML = `BMI hodnota: ${bmiRange} <br> ${classification} `;
  }
  