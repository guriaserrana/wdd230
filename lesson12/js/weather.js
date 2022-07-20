    // select HTML elements to edit
    const currentTemp = document.querySelector('#current-temp');   
    
    const url = "//api.openweathermap.org/data/2.5/weather?id=3448439&appid=02b739bf12eedc884c1f3c1ef6f4146b&units=imperial";
    fetch(url)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo); // this is temporary for development only

        currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(0)}</strong>`;         
        const desc = weatherInfo.weather[0].description;
        
        captionDesc.textContent = desc;
    });

    function action(){

        let closeable = document.querySelector('.closeable')

        closeable.style.display = 'none';
    }

    