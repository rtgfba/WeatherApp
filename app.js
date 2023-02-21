const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req,res){
    var city = "Silver Spring"
    const url = "https://api.weatherapi.com/v1/current.json?key=0e9af79924c94c8988b190520232102&q=" + city + "&aqi=no"

    https.get(url, function(response){
        console.log(response.statusCode);``
        response.on("data", function(data){
           const weatherData = JSON.parse(data);
           const temp = weatherData.current.temp_f
           const weatherDescription = weatherData.current.condition.text
           const weatherIcon = weatherData.current.condition.icon
           console.log(weatherData);
           res.write("<h1>The temperature in " + city + ", is " + temp + " degrees Fahrenheit</h1>");
           res.write("<h2>The weather is currently " + weatherDescription + "</h2>");
           res.write("<img src=" + weatherIcon + ">");
           res.send();
        });
    });
 
});









app.listen(3000, function(){
    console.log("Sever is running on port 3000");
});
