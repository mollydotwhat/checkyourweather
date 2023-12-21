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
var keyCode = "fb19d043c4c8d10594e04cf27975c0d5";

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
        // select & return location coords from object returned
        return cityCoords = [data[0].lat, data[0].lon]
    })
    // JUST in case because scope is difficult sometimes
    return cityCoords;
};

 function searchOne () {
   getWeather();
 };

searchBtnOne.on("click", searchOne);

// get weather api
function getWeather() {
    event.preventDefault();
    let cityName = cityInput.val().trim();
    console.log(cityName);
    var coordSet = getLatLon(cityName);
    var cityLat = coordSet[0];
    var cityLon = coordSet[1];
    console.log(cityLat);
    console.log(cityLon);
    // using coords returned from getLatLon to search weather app. I might need more async syntax for this, but trying it this way first.
    var citySearched = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${keyCode}`

    fetch(citySearched)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
        // buildToday(data);
        // build5Day(data);
    })

};

function buildToday (cityInfo) {
    let todayTemp = cityInfo.main.temp;
    let todayHumidity = cityInfo.main.humidity;
    let todayWinds = cityInfo.main.wind;

};

function build5Day (cityInfo) {

}


//params from getweather
// maybe consolidate this into other function?
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



