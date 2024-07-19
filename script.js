document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search');
    const locationInput = document.getElementById('location');
    const weatherDiv = document.getElementById('weather');
    const temperatureDiv = document.getElementById('temperature-div');
    const windDiv = document.getElementById('wind-div');
    const longitudeDiv = document.getElementById('longitude');
    const latitudeDiv = document.getElementById('latitude');

    searchButton.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            fetch('http://localhost:3000/counties')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const county = data.find(c => c.location.toLowerCase() === location.toLowerCase());
                    if (county) {
                        weatherDiv.textContent = `Location: ${county.location}`;
                        temperatureDiv.textContent = `Temperature: ${county.temperature}°C`;
                        windDiv.textContent = `Wind: ${county.wind}`;
                        longitudeDiv.textContent = `Longitude: ${county.longitude}`;
                        latitudeDiv.textContent = `Latitude: ${county.latitude}`;
                    } else {
                        weatherDiv.textContent = 'Location not found';
                        temperatureDiv.textContent = '';
                        windDiv.textContent = '';
                        longitudeDiv.textContent = '';
                        latitudeDiv.textContent = '';
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    weatherDiv.textContent = 'An error occurred';
                });
        } else {
            weatherDiv.textContent = 'Please enter a location';
        }
    });
});































































// document.addEventListener("DOMContentLoaded", function () {
//     const location = document.getElementById('location');
//     const temperature = document.getElementById('temperature-div');
//     const wind = document.getElementById('wind-div');
//     const longitude = document.getElementById('longitude');
//     const latitude = document.getElementById('latitude');   
//     const searchButton = document.getElementById('search');
//     const weatherList = document.getElementById('weather');

// fetchCounties();

// searchButton.addEventListener('click', () => fetchCounties());

// function fetchCounties() {
// fetch("http://localhost:3000/counties")
//         .then(response => response.json())
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => console.log(error));
// }
    

// function displayWeather(data) {
//     weatherList.innerHTML = '';

//     data.forEach(county => {
//         const li = document.createElement("li");
//         li.textContent = `${county.name}`;
//         li.addEventListener('click', function () {
//             displayCountyInformation(county);
//         });
//         // weatherList.appendChild(li);

//         const weatherInfo = document.createElement("div");
//         weatherInfo.innerHTML =`

//         <p>Location: ${county.location}</p>
//         <p>Temperature: ${county.temperature} degrees</p>
//         <p>Wind: ${county.wind} km/h</p>
//         <p>Longitude; ${county.longitude} S</p>
//         <p>Latitude: ${county.latitude} N</p>
//         `;
//         weatherList.appendChild(weatherInfo);
//     });
// }
// function displayCountyInformation(county) {
    
//     locationInput.value = county.name;
//     temperature.textContent = `Temperature: ${county.temperature} degrees`;
//     windDiv.textContent = `Wind: ${county.wind} km/h`;
//     longitude.textContent = `Longitude: ${county.longitude} S`;
//     latitude.textContent = `Latitude: ${county.latitude} N`;
//   }
// });
