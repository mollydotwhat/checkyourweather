// variables for divs and form fields
var searchFormOne = $("#searchFormOneOne");
var cityInput = $("#cityField")
var searchBtnOne = $("#submitBtnOne")
var searchBtn5Day = $("#searchBtn5Day")
var latInput = $('#cityLat')
var lonInput = $('#cityLon')
var weatherToday = $("#weatherToday");
var weatherFiveDay = $("#weatherFiveDay");
var searchHistory = $("#searchHistory");
var keyCode = "fb19d043c4c8d10594e04cf27975c0d5";

// will be generating (most) page contents programatically

// search function (get user input from form field)
function searchOne() {
    // parse input, send to get weather
    event.preventDefault();
    var parsedCity = cityField.val().trim();
    getWeather(parsedCity);

};
searchBtnOne.on("click", searchOne);

// get weather api
function getWeather(city) {
    event.preventDefault();
    var citySearched = `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${keyCode}`
    var getLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${keyCode}`
    var cityLat = getLatLon[1].lat;
    var cityLon = getLatLon[1].lon;
    //fetch (async)f
    fetch(citySearched).then(function (response) {
        console.log(response.json)
        return response.json;
    }).then(function (data){
        // first day in list = today
        weatherToday(data.list[0]);
        // temperature
        // humidity
        // winds

        //showFive(data.coord.lat, data.coord.lon);
    })
};

function search5Day () {
    var lat = latInput.val();
    var lon = lonInput.val();
    showFive(lat, lon);
};
searchBtn5Day.on("click", search5Day);

//params from getweather
function weatherToday(currentCity) {
    //build today section elements w/info from search
    var cityName = currentCity.name;
    var currentDate;
    var currentTemp;
    var currentWind;
    var currentHumidity;
}

//params from getweather
function showFive(lat, lon) {
    //build 5-day section w/info from search
    // get lat & lon AS INPUT!!! No fussy parsing city name to exact location.
    var getFiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=fb19d043c4c8d10594e04cf27975c0d5`

    fetch(getFiveDay).then(function (response){
        return response.json
    }).then(function (data){
        var cityName = data.name;
        //header w/city name
        // loop through data list by index (less than 5 because array), generating card w/each date, temp, wind, humidity


    })
    // card per day
    

}



