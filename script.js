let cities = [
  "Maine",
  "New York",
  "North Carolina",
  "Nashville",
  "Chicago",
  "Rexburg",
  "Hawaii",
];
let url = "";
letqueryurl = "";
var apiKey = "bc446cf7ce1e7b9894b233c0b69caad0";
let lat = "latitude";
let lon = "longitude";
let uvIndex = lat + lon;

//get geolocation
//https:api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
//exclude={part}&appid={YOUR API KEY}

function currentWeather() {
  navigator.geolocation.getCurrentPosition(function (position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    var queryURL =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey;

    $.ajax({
      url: queryURL,
      method: "GET",
    })
      //hard part=//store all of the retrieved data inside of an object called "response" (icons)
      .then(function (response) {
        var iconCode = response.wether[0].icon;

        //get icon to response from open-weather-map
        var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $(".city").html("<li>" + response.name + "</li>");
        $(".temp").text(
          "Temperature:" +
            ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) +
            "°F"
        );
        $(".humidity").text("Humidity:" + response.main.humidity + "%");
        $(".wind").text("Wind Speed:" + response.wind.speed + "MPH");
        $("#wicon").attr("src", iconurl);
      });
  });
}

//forEach for the cities function

// search for a city, will need a local storage

//will need an api key for currentForecast

//click on cities in the list group and see the current temperature

//in the currentForecast container, temperature, humdity, wind speed and UV index

//5day forecast in the border boxes.
