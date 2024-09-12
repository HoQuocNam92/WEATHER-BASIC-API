const APP_ID = 'b5ee50384f47f9edc1b894172a20c306';
const searchInput = document.getElementById('searchInput');
const Degree = document.getElementById('temp');
const thanhpho = document.getElementById('city_name');
const icons = document.getElementById('iconss');
const styleweather = document.getElementById('weather_state');

const defaultValue = '--';
searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(function (a) {
            return a.json();
        })

        .then(function (data) {



            thanhpho.innerHTML = data.name || defaultValue;
            let decimalValue = data.main.temp || defaultValue;
            let roundedValue = Math.round(decimalValue);
            Degree.innerHTML = roundedValue || defaultValue;
            icons.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            styleweather.innerHTML = data.weather[0].description;


        })
});
