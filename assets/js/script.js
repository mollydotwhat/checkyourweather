// variables for divs and form fields
var searchFormOne = document.getElementById("searchFormOne");
var cityInput = document.getElementById("cityField");
var searchBtnOne = document.getElementById("submitBtnOne");
var searchBtn5Day = document.getElementById("searchBtn5Day");
// var latInput = $('#cityLat')
// var lonInput = $('#cityLon')
var weatherToday = document.getElementById("weatherToday");
var weatherFiveDay = document.getElementById("weatherFiveDay");
var searchHistory = document.getElementById("searchHistory");
var keyCode = "b28d843808a4e22cd1fffa0efffc9697";

// will be generating (most) page contents programatically

// search function (get user input from form field)
function getLatLon (nameCity) {
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

 function searchOne () {
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

function buildToday (cityInfo) {
    // var weatherDesc = JSON.stringify(cityInfo.weather.description);
    // console.log(weatherDesc) nope, not getting it. leave it for later.

    // var weatherIcon;
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

};

function getForecast5 (lat, lon) {
    var cityForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${keyCode}`

    fetch(cityForecast).then(function (response){
        return response.json
    }).then(function (data){
       console.log(data)

    })
}

function build5Day (cityInfo) {

}


//params from getWeatherNow
// maybe consolidate this into other function?





