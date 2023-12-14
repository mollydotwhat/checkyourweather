// variables for divs and form fields
var searchForm = $("#searchForm");
var cityField = $("#cityField")
var searchBtn = $("#submitBtn")
var weatherToday = $("#weatherToday");
var weatherFiveDay = $("#weatherFiveDay");
var searchHistory = $("#searchHistory");

// will be generating (most) page contents programatically

// search function (get user input from form field)
function search() {
    // parse input, send to get weather
    // var inputSent = ;
    // var parsedCity = `http://api.openweathermap.org/geo/1.0/direct?q=${inputSent}&limit=5&appid={API key}`;
    var parsedCity = cityField.val().trim();
    getWeather(parsedCity)
};
searchBtn.on("click", search);

// get weather api
function getWeather(city) {
    // turn city into lat/lon?
    // call w/key EXAMPLE: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fb19d043c4c8d10594e04cf27975c0d5
    // replace London,uk programatically
    
    //SAVE city searched to search history list

    var citySearched = `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=fb19d043c4c8d10594e04cf27975c0d5`
    //fetch (async)
    fetch(citySearched).then(function (response) {
        console.log(response.json)
        return response.json;
    }).then(function (data){
        // first day in list = today
        weatherToday(data.list[0]);
        showFive(data.coord.lat, data.coord.lon);
    })
};

//params from getweather
function weatherToday(currentCity) {
    //build today section w/info from search
    var cityName = currentCity.name;
    var currentDate;
    var currentTemp;
    var currentWind;
    var currentHumidity;
}

//params from getweather
function showFive(lat, lon) {
    //build 5-day section w/info from search
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



