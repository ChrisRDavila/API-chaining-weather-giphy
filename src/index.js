// Import statements updated to reflect new paths and also import GiphyService.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './services/weather-service.js';
import GiphyService from './services/giphy-service.js';

// Business Logic

// we update the name of this function
function getAPIData(city) {
  WeatherService.getWeather(city)
    .then(function(weatherResponse) {
      if (weatherResponse instanceof Error) {
        const errorMessage = `there was a problem accessing the weather data from OpenWeather API for ${city}: 
        ${weatherResponse.message}`;
        throw new Error(errorMessage);
      } 
      const description = weatherResponse.weather[0].description;
      printWeather(description, city);
      return GiphyService.getGif(description);
    })
    .then(function(giphyResponse) {
      if (giphyResponse instanceof Error) {
        const errorMessage = `there was a problem accessing the gif data from Giphy API: 
        ${giphyResponse.message}.`;
        throw new Error(errorMessage);
      } 
      displayGif(giphyResponse, city);
    })
    .catch(function(error) {
      printError(error);
    });
}

// UI Logic

// the parameter has changed for this function, as 
// has the message it prints to the DOM
function printWeather(description, city) {
  document.querySelector('#weather-description').innerText = `The weather in ${city} is ${description}.`;
}

// printError() is now much more simple, since we handle
// creating the error message in the getAPIData() function
function printError(error) {
  document.querySelector('#error').innerText = error;
}

// we have a new function that displays the gif
function displayGif(response, city) {
  const url = response.data[0].images.downsized.url;
  const img = document.createElement("img");
  img.src = url;
  img.alt = `${city} weather`;
  document.querySelector("#gif").append(img);
}

// we have a new function that clear previous results.
function clearResults() {
  document.querySelector("#gif").innerText = null;
  document.querySelector('#error').innerText = null;
  document.querySelector('#weather-description').innerText = null;
}

function handleFormSubmission(event) {
  event.preventDefault();
  // we call our new function (below) to clear previous results
  clearResults();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  // we update the name of the function that makes the API call
  getAPIData(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});