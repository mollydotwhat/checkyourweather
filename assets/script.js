// variables for divs and form fields
var searchForm = $("#searchForm");
var searchBtn = $("#submitBtn")
var weatherToday = $("#weatherToday");
var weatherFiveDay = $("#weatherFiveDay");
var searchHistory = $("#searchHistory");

// will be generating (most) page contents programatically

// search function (get user input from form field)
function search() {
    // parse input, send to get weather
    var parsedCity;
    getWeather(parsedCity)
};
searchBtn.on("click", search);

// get weather api
function getWeather(city) {
    // turn city into lat/lon?
    // call w/key EXAMPLE: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fb19d043c4c8d10594e04cf27975c0d5
    // replace London,uk programatically

    var citySearched = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fb19d043c4c8d10594e04cf27975c0d5`
    //fetch (async)
    fetch(citySearched).then(function (response) {
        console.log(response.json)
        return response.json;
    }).then(function (data){
        weatherToday(data);
        showFive(data);
    })

    //SEE NOTES IN UNCATEGORIZED FOLDER (in-class notetaking). relevant function structure
}

//params from getweather
function weatherToday() {
    //build today section w/info from search
}

//params from getweather
function showFive() {
    //build 5-day section w/info from search
    // card per day
}



