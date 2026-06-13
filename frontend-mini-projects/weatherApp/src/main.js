const API_KEY = import.meta.env.VITE_API_KEY;

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  cityInput.value = "";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const city = document.getElementById("city");
      const humidity = document.getElementById("humidity-label");
      const condition = document.getElementById("condition");
      const coIcon = document.getElementById("condition-icon");
      const temp = document.getElementById("temperature");
      const wind = document.getElementById("wind-label");
      const feelsLike = document.getElementById("feels-like");
      const iconCode = data.weather[0].icon;

const iconUrl =
  `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  
document.getElementById("condition-icon").src = iconUrl;

      city.textContent = cityName;
      humidity.textContent = `${data.main.humidity}%`;
      condition.textContent = data.weather[0].description;
      temp.textContent = `${data.main.temp}°C`;
      wind.textContent = `${data.wind.speed} km/h`;
      feelsLike.textContent = `${data.main.feels_like}°C`;
    });
});
