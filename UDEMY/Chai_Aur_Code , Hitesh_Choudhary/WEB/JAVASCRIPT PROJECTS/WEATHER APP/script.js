
document.addEventListener("DOMContentLoaded", () => {

        const cityInput = document.getElementById("city-input");
        const getWeatherButton = document.getElementById("get-weather-btn");
        const weatherInfo = document.getElementById("weather-info");
        const cityName = document.getElementById("city-name");
        const tempreture = document.getElementById("temperature");
        const description = document.getElementById("description");
        const errorMessage = document.getElementById("error-message");

        const API_KEY = "298b0a71c0881dde04168323716f68e6";

        getWeatherButton.addEventListener("click", async () => {
            const city = cityInput.value.trim();
            if (!city) return;

            //It May Throw Error
            //Server/Database Is In Another Contenent

            try {
               const weatherData = await fetchWeatherData(city);
               displayWeatherData(weatherData);
            }
            catch (error) {
                showError();
            }

        });

        async function fetchWeatherData(city){
            //Gets The Data
            const url = `b1b15e88fa797225412429c1c50c122a1">api.openweathermap.org/data/2.5/forecast?id&appid=${API_KEY}`;

            const response = await fetch(url);

            console.log(typeof response);
            console.log("Response",response);

            if (!response.ok) {
                throw new Error("City Not Found!");
            }
            await response.json();
        }

        function displayWeatherData(data){
            //Show The Data
            console.log(data);

            const {name, main, weather} = data;
            cityName.textContent = name;
            tempreture.textContent = `Tempreture : ${main.value}`;
            description.textContent = `Description : ${weather[0].description}`;

            //Unlock The Display
            weatherInfo.classList.remove("hidden");
            errorMessage.classList.add("hidden");

        }

        function showError(){
            weatherInfo.classList.remove("hidden");
            errorMessage.classList.add("hidden");
        }

});