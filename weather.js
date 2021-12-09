
async function weather(place) {

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`);
    //place denotes the city that is entered
    const result = await response.json();
    return result;
}
function displayweather() {

    var place = document.getElementById("input").value;
    var data = weather(place);
    data.then(e => document.getElementById("lat").innerHTML = "Latitude : " + e.coord.lat + " N");
    data.then(e => document.getElementById("lon").innerHTML = "Longitude: " + e.coord.lon + " E");
    data.then(e => document.getElementById("temp").innerHTML = "Temperature is : " + e.main.temp + " K");
    data.then(e => document.getElementById("pressure").innerHTML = "Pressure is : " + e.main.pressure);
    data.then(e => document.getElementById("humidity").innerHTML = "Humidity is : " + e.main.humidity + " %");
}

