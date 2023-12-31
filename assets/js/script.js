// variables for divs and form fields
var searchFormOne = document.getElementById("searchFormOne");
var cityInput = document.getElementById("cityField");
var searchBtnOne = document.getElementById("submitBtnOne");
var weatherToday = document.getElementById("weatherToday");
var weatherFiveDay = document.getElementById("weatherFiveDay");
var searchHistory = document.getElementById("searchHistory");
// var keyCode = "b28d843808a4e22cd1fffa0efffc9697";
var keyCode = "fb19d043c4c8d10594e04cf27975c0d5";

// will be generating (most) page contents programatically

// search function (get user input from form field)
function getLatLon(nameCity) {
    event.preventDefault();

    var findCoords = `http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=5&appid=${keyCode}`

    fetch(findCoords)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(`finding coordinates for: ` + data[0].name)
            console.log(data)
            getWeatherNow(data[0].lat, data[0].lon);
            getForecast5(data[0].lat, data[0].lon);
        })

};

function searchOne() {
    var cityName = cityInput.value;
    getLatLon(cityName);
    //    getWeatherNow();
};

searchBtnOne.addEventListener("click", searchOne);

// get weather api
function getWeatherNow(lat, lon) {

    // using coords returned from getLatLon to search weather app. I might need more async syntax for this, but trying it this way first.
    var citySearched = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${keyCode}`

    fetch(citySearched)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            console.log(`city name: ` + JSON.stringify(data.name))
            console.log(`weather search result: ` + JSON.stringify(data))
            buildToday(data)
            // build5Day(data)
        })

};

function buildToday(cityInfo) {
    var weatherDesc = cityInfo.weather[0].description;
    console.log(weatherDesc)
    var weatherIcon = cityInfo.weather[0].icon ;
    var currentTemp = cityInfo.main.temp;
    console.log(`current temp:` + currentTemp);
    var feelsLike = cityInfo.main.feels_like;
    console.log(`feels like ${feelsLike}`);
    var minTemp = cityInfo.main.temp_min;
    console.log(`minimum temp: ${minTemp}`);
    var maxTemp = cityInfo.main.temp_max;
    console.log(`max temp: ${maxTemp}`);
    var todayHumidity = cityInfo.main.humidity;
    console.log(`humidity: ${todayHumidity}`)
    var todayWinds = cityInfo.wind;
    console.log(`wind speed: ${todayWinds.speed}`)

    var todayCard = `<center>
    <h4>${dayjs().format('dddd, MMMM DD')} in ${cityInfo.name}:</h4>
    <div><img id="icon" src='https://openweathermap.org/img/w/${weatherIcon}.png' />: ${weatherDesc}</div>
    <div>Current temperature is ${currentTemp}</div>
    It feels like ${feelsLike}</p>
    </center>`

    document.getElementById('weatherToday').innerHTML+= todayCard;
    


};

function getForecast5(lat, lon) {
    var cityForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${keyCode}`

    fetch(cityForecast).then(function (response) {
        console.log("getting forecast")
        return response.json();
    }).then(function (data) {
        build5Day(data)
    })
}

function build5Day(data) {
    cityName = data.city.name;
    console.log(`forecast: ` + cityName)
    // now to get data keys
    console.log(data)

    // for loop pulls up forecast at 9am, once a day
    for (i = 4;  i < data.list.length ; i+= 8 ) {
        console.log(`Array index: ` + i)
        dateText = data.list[i].dt_txt
        var formatDate = dayjs.unix(data.list[i].dt).format('dddd, MM/DD')
        console.log(`forecast for 9 AM on ` + formatDate)
        console.log(`feels like: ` + data.list[i].main.feels_like)
        let outFeels = data.list[i].main.feels_like;
        let currTemp = data.list[i].main.temp;
        let weathIcon = data.list[i].weather[0].icon;
        let descFive = data.list[i].weather[0].description;
        let oneCard= `<p>
        <h5>${formatDate} <img id="icon" src='https://openweathermap.org/img/w/${weathIcon}.png' /></h5>
        <div>The 9AM forecast is ${currTemp}°F and ${descFive} but it'll feel like ${outFeels}°F</div>
        </p>`;
        document.getElementById('weatherFiveDay').innerHTML += oneCard

    }
}







