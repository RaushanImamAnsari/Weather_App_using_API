
const apiKey = "6beb854b11019725c580e62110dbc271";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".bar input");
const searchButton = document.querySelector(".bar button");
const WeatherIcons = document.querySelector(".Weather_icons");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }
    else {

        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            WeatherIcons.src = "Icons/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            WeatherIcons.src = "Icons/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            WeatherIcons.src = "Icons/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            WeatherIcons.src = "Icons/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            WeatherIcons.src = "Icons/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            WeatherIcons.src = "Icons/snow.png"
        }

        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

