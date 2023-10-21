document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const convertButton = document.getElementById('convert');
    const resultElement = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultElement.textContent = `Result: ${celsius}°C is equal to ${fahrenheit}°F`;
        } else {
            resultElement.textContent = 'Please enter a valid temperature in Celsius.';
        }
    });
});
