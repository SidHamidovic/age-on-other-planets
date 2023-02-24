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

    // Calculate the user's age on the selected planet by dividing their Earth age by the planet's year ratio, and round the result to 2 decimal places
    const planetAge = (age / planetYearRatios[planet]).toFixed(1);

    // Set the innerHTML of the results div to show the user's age on the selected planet
    resultsDiv.innerHTML = `<h3>Vous avez ${planetAge} ans sur ${planet.charAt(0).toUpperCase() + planet.slice(1)}.</h3>`;
} else {                    
    // If the user did not enter an age value, show an error message
    resultsDiv.innerHTML = '<p>Veuillez entrer un âge</p>';
  }
});
