// Define a function to convert decimal years into years and months
function convertDecimalYearsToYearsAndMonths(decimalYears) {
  // Calculate the number of whole years
  const years = Math.floor(decimalYears);

  // Calculate the number of months remaining after the whole years have been accounted for
  const decimalMonths = (decimalYears - years) * 12;
  const months = Math.round(decimalMonths);

  // Return an object containing the years and months
  return { years, months };
}

// Select the form and results div elements from the HTML document
const form = document.querySelector('form');
const resultsDiv = document.querySelector('#results');

// Listen to the form submission event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior, which would refresh the page
  e.preventDefault();

  // Get the user's age input from the form
  const ageInput = document.querySelector('#age');
  const age = ageInput.value;

  // Get the selected planet from the form
  const planetSelect = document.querySelector('#planet');
  const planet = planetSelect.value;

  // Check if the user entered an age value
  if (age) {
    // Define the ratio of each planet's year to Earth's year as an object
    const planetYearRatios = {
      mercure: 0.2408467,
      venus: 0.61519726,
      earth: 1,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturne: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
      pluton: 248.00
    };

    // Calculate the user's age on the selected planet by dividing their Earth age by the planet's year ratio
    const planetAgeDecimal = age / planetYearRatios[planet];

    // Convert the decimal age into years and months using the `convertDecimalYearsToYearsAndMonths` function
    const planetAgeObj = convertDecimalYearsToYearsAndMonths(planetAgeDecimal);


    // How to avoid results such as "You are 12months old" or "You are 1 year and 0 month", and instead 
    //these obtain round results like "You are 1 year" ?????????????????

    
    // check if the user's age is less than one year. 
    // If the user's age is less than one year, the age is displayed in months only. 
    //Otherwise, the age is displayed in years and months.
    if (planetAgeObj.years === 0) {
      resultsDiv.innerHTML = `<h3>Vous avez ${planetAgeObj.months} mois sur ${planet.charAt(0).toUpperCase() + planet.slice(1)}.</h3>`;
    } 
    else {
      resultsDiv.innerHTML = `<h3>Vous avez ${planetAgeObj.years} ans et ${planetAgeObj.months} mois sur ${planet.charAt(0).toUpperCase() + planet.slice(1)}.</h3>`;
    }

  } 
  else {
    // If the user did not enter an age value, show an error message
    resultsDiv.innerHTML = '<p>Veuillez entrer un âge</p>';
  }
});
