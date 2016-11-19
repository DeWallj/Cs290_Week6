/**
* Jennifer DeWall
* CS 290_Fall
* Week 6 Assignment: Ajax Interactions
* This file contains functions that uses POST to get data from httpbin
* based on users text input
**/

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons()
{
    document.getElementById("httpbinButton").addEventListener("click", function(event)
    {
        //Save data locally
        var textData = document.getElementById("textInput").value;
        var urlHttpbin = "http://httpbin.org/post";

        //Make request and save returned data
        var req = new XMLHttpRequest();
        req.open("POST",urlHttpbin, true);

        //Asynchronous request
        req.addEventListener("load", function()
        {
            if(req.status >= 200 && req.status < 400)
            {
                //Display JSON encoded string
                var response = JSON.parse(req.responseText);
                document.getElementById("textVal").textContent = response.data;
            }
            else
            {
                console.log("Error in network request: " + request.statusText);
            }
        });

        req.send(textData);
        event.preventDefault();
    });
}