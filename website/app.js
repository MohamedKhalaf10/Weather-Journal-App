/* Global Variables */
const generateButton = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '5cb5360758b086a8859bbafce7ed45c3';

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener('click', () => { 

// Define variables for entry data from the user
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

// Call Function to GET Web API Data from OpenWeatherMap
    getData(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`)

    .then((data) => {

// Call Function to POST Data to The End Point
        postData ('/postData',{date:newDate, temp:data.main.temp, feelings:feelings})

        // Call Function to GET Project Data
        updateUI()
    })
});




/* Function to GET Web API Data*/
const getData = async (url = '') => {

    const req = await fetch (url);
    
    try {
        const data = await req.json();
        return data;
    }
    catch(error) {
        console.log(`Error: ${error}`);
    }
};

/* Function to POST data */
const postData = async ( url = '', data = {}) => {

    const res = await fetch (url, {
        method:'POST',
        credentials:'same-origin',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    });

    try{
        const newData = await res.json();
        return newData;
    }
    catch(error) {
        console.log(`Error: ${error}`);
    }
};
/* Function to GET Project Data And Add it to the HTML */
const updateUI = async () => {
    const req = await fetch('/getData');    
    try {
        const data = await req.json();
        document.getElementById('date').innerHTML = `Date: ${data.date}`
        document.getElementById('temp').innerHTML = `Temp: ${data.temp}°C`
        document.getElementById('content').innerHTML = `Feelings: ${data.feelings}`
    }
    catch(error) {
        console.log(`Error: ${error}`);
    }
};