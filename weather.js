let apiKey = 'f9f514dfdaa749a98f1110734243009';

function fetchWeatherData() {
    let city = document.getElementById('city-input').value ||'';
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    fetch(url)  
        .then(response => response.json())
        .then(data => {
            console.log(data);
            header = document.getElementById('city-name');
            weatherdata = document.getElementById('weather');
            image = document.getElementById('weather-icon');
            header.innerHTML = "The current weather in " + data.location.name;
            weatherdata.innerHTML = data.current.condition.text;
            image.src = data.current.condition.icon;
        })

        .catch(error => {
            console.log(error);
        });
}