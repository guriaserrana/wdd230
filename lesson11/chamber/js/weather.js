    // select HTML elements to edit
    const currentTemp = document.querySelector('#current-temp');
    const tempMax = document.querySelector('#max');
    const tempMin = document.querySelector('#min');
    // const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    const windSpeed = document.querySelector('#speed');
    const windChill = document.querySelector('#wch');

    const url = "//api.openweathermap.org/data/2.5/weather?id=3458930&appid=02b739bf12eedc884c1f3c1ef6f4146b&units=imperial";
    fetch(url)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo); // this is temporary for development only

        currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(0)}</strong>`;
        // tempMax.innerHTML = `<strong>${weatherInfo.main.temp_max.toFixed(0)}</strong>`;
        // tempMin.innerHTML = `<strong>${weatherInfo.main.temp_min.toFixed(0)}</strong>`;
        windSpeed.innerHTML = `${weatherInfo.wind.speed.toFixed(0)}`
        captionDesc.innerHTML = weatherInfo.weather.description;

        // const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
        const desc = weatherInfo.weather[0].description;

        // weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;



    });