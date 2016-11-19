/**
* Jennifer DeWall
* CS 290_Fall
* Week 6 Assignment: Ajax Interactions
* This file contains functions that gets weather data from Open Weather
* Map based on zip code and city input from user
**/

var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";

document.addEventListener("DOMContentLoaded", setUpButtons);

/*
* setUpButtons()
* Gets weather data from Open Weather Map
*/
function setUpButtons()
{
    //Get weather by city input
    document.getElementById("cityWeatherButton").addEventListener("click", function(event)
    {
        //Save data locally 
        var city = document.getElementById("textInput").value;
        var zip = document.getElementById("numInput").value;
        var urlZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${apiKey}`;
        var urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;
        
        //Make HTTP request and save data returned
        var req = new XMLHttpRequest();
        req.open("GET", urlCity, true);

        //Asynchronous request
        req.addEventListener("load", function()
        {
            if(req.status >= 200 && req.status < 400)
            {
                //Display JSON object
                var response = JSON.parse(req.responseText);
                document.getElementById("cityNameVal").textContent = response.name;
                document.getElementById("weatherVal").textContent = response.weather[0].main;
                document.getElementById("tempVal").textContent = response.main.temp + " F.";
                document.getElementById("humidVal").textContent = response.main.humidity + "%";
            }
            else
            {
                console.log("Error in network request: " + request.statusText);
            }
        });

        req.send(null);
        event.preventDefault();
    });

    //Get input by zip input
    document.getElementById("zipWeatherButton").addEventListener("click", function(event)
    {
        //Save local data
        var zip = document.getElementById("numInput").value;
        var urlZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${apiKey}`;

        //Make HTTP request and save data returned
        var req = new XMLHttpRequest();

        req.open("GET", urlZip, false);

        //Asynchronous request
        req.addEventListener('load', function()
        {
            if(req.status >= 200 && req.status < 400)
            {
                //Display JSON object
                var response = JSON.parse(req.responseText);
                console.log(response);
                console.log(response.main.temp);
                document.getElementById("cityNameVal").textContent = response.name;
                document.getElementById("weatherVal").textContent = response.weather[0].main;
                document.getElementById("tempVal").textContent = response.main.temp + " F.";
                document.getElementById("humidVal").textContent = response.main.humidity + "%";
            }
        });

        req.send(null);
        event.preventDefault();
    });
};



