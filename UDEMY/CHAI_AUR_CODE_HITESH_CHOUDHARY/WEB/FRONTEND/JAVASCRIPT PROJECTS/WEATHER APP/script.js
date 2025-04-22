document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "Paste Your Key Here";

    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const tempreture = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    let cities = JSON.parse(localStorage.getItem("cities")) || [];

    getWeatherButton.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);

            // Update cities array and save to local storage
            if (!cities.includes(city)) {
                cities.push(city);
                localStorage.setItem("cities", JSON.stringify(cities));
            }
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City Not Found!");
        }

        return await response.json();
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        cityName.textContent = name;
        tempreture.textContent = `Temperature: ${(main.temp - 273.15).toFixed(2)}°C`; // Convert Kelvin to Celsius
        description.textContent = `Description: ${weather[0].description}`;

        // Unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError() {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
});