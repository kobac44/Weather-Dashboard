let cities = [
  "Maine",
  "New York",
  "North Carolina",
  "Nashville",
  "Chicago",
  "Rexburg",
  "Hawaii",
];
url = "https://api.openweathermap.org/data/2.5/forecast?q=";
queryurl = url + city + APIkey;
var apiKey = "bc446cf7ce1e7b9894b233c0b69caad0";
let lat = "latitude";
let lon = "longitude";
let uvIndex = lat + lon;

// store the value of the input
let city = $("#searchTerm").val();

let date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchButton").click(); 
	} 
});

$("#searchBtn").on("click", function() {

  $('#currentForecast').addClass('show');

  // get the value of the input from user
  city = $("#searchTerm").val();
  
  // clear input box
  $("#searchTerm").val("");  



//get geolocation
//https:api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
//exclude={part}&appid={YOUR API KEY}

function currentWeather() {
  navigator.geolocation.getCurrentPosition(function (position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    const queryURL =
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

// currentForecast function
currentForecast();

//forEach for the cities to display function

//click on cities in the list group and see the current temperature

//in the currentForecast container, temperature, humdity, wind speed and UV index

//5day forecast in the border boxes.
