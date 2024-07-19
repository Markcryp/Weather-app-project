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

    locationInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
































































