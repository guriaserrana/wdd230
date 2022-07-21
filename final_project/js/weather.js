const currentTemp = document.querySelector('#current-temp');
const temp1 = document.querySelector('#temp1');
const humidity = document.querySelector('#hmdt');
const windSpeed = document.querySelector('#speed');
const captionDesc = document.querySelector('figcaption');

 //Forecast next 3 days
 const temp2 = document.querySelector('#temp2');
 const temp3 = document.querySelector('#temp3');
 const temp4 = document.querySelector('#temp4');

const url = "//api.openweathermap.org/data/2.5/onecall?lat=-23.54&lon=-46.63&appid=02b739bf12eedc884c1f3c1ef6f4146b&units=imperial"; 
fetch(url)
.then((response) => response.json())
.then((weatherInform) => {
    console.log(weatherInform); // this is temporary for development only

    
    currentTemp.innerHTML = `<strong>${weatherInform.current.temp.toFixed(0)}</strong>`;
    temp1.innerHTML = `<strong>${weatherInform.current.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherInform.current.humidity.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherInform.current.wind_speed.toFixed(0)}</strong>`;

    temp2.innerHTML = `<strong>${weatherInform.daily[0].temp.day.toFixed(0)}</strong>`;
    temp3.innerHTML = `<strong>${weatherInform.daily[1].temp.day.toFixed(0)}</strong>`;
    temp4.innerHTML = `<strong>${weatherInform.daily[2].temp.day.toFixed(0)}</strong>`;  
    
    

    
    const iconcode = weatherInform.current.weather[0].icon;
    // console.log(iconcode);
    const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
    // console.log(icon_path);
    document.getElementById('forecast').src = icon_path;

    captionDesc.innerHTML = weatherInform.current.weather.description;   
    const desc = weatherInform.current.weather[0].description;   
    captionDesc.textContent = desc;
});


    function action(){

        let closeable = document.querySelector('.closeable')

        closeable.style.display = 'none';
    }

    