/**
* Jennifer DeWall
* CS 290_Fall
* Week 6 Assignment: Ajax Interactions
**/

var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";

document.addEventListener('DOMContentLoaded', setUpButtons);

/*
* setUpButtons()
* 
*/
function setUpButtons()
{
    document.getElementById("cityWeatherButton").addEventListener("click", function(event)
    {
        //Save local data
        var city = document.getElementById("textInput").value;
        var zip = document.getElementById("numInput").value;
        var urlZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${apiKey}`;
        var urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;
        
        //Make HTTP request and save data returned
        var req = new XMLHttpRequest();

        req.open("GET", urlCity, false);
        req.send(null);

        //Display JSON object
        var response = JSON.parse(req.responseText);
        console.log(response);
        console.log(response.main.temp);
        document.getElementById("weatherVal").textContent = response.weather[0].main;
        document.getElementById("tempVal").textContent = response.main.temp + " F.";
        document.getElementById("humidVal").textContent = response.main.humidity + "%";
        event.preventDefault();
    })

    document.getElementById("zipWeatherButton").addEventListener("click", function(event)
    {
        //Save local data
        var zip = document.getElementById("numInput").value;
        var urlZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${apiKey}`;

        //Make HTTP request and save data returned
        var req = new XMLHttpRequest();

        req.open("GET", urlZip, false);
        req.send(null);

        //Display JSON object
        var response = JSON.parse(req.responseText);
        console.log(response);
        console.log(response.main.temp);
        document.getElementById("weatherVal").textContent = response.weather[0].main;
        document.getElementById("tempVal").textContent = response.main.temp + " F.";
        document.getElementById("humidVal").textContent = response.main.humidity + "%";
        event.preventDefault();
    })
};



