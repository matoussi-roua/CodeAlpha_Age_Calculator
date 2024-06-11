// Select ageCalculatorForm element
const form = document.getElementById('ageCalculatorForm');
// Select result element
const resultDiv = document.querySelector('.result');

// Add event listener to the form submit event value="submit"
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input "name="dateofbirth""
    const dateOfBirth = new Date(this.dateofbirth.value);
    
    // Calculate the age
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
const monthDiff = today.getMonth() - dateOfBirth.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
}
    // const age = today.getFullYear() - dateOfBirth.getFullYear();

    //the result
    resultDiv.textContent = `Your age is: ${age}`;


});
