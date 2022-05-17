/* Global Variables */
const generateButton = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "5cb5360758b086a8859bbafce7ed45c3";

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener("click", () => {
  // Define variables for entry data from the user
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("date").innerHTML = `Date: ${newDate}`;
      document.getElementById("temp").innerHTML = `Temp: ${data.main.temp}°C`;
      document.getElementById("content").innerHTML = `Feelings: ${feelings}`;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
});
