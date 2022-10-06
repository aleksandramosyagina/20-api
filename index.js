document.addEventListener("DOMContentLoaded",
function(event) {
fetch('https://api.nasa.gov/planetary/apod?api_key=fksgww4XTS1c2OwTNBh0jwVKLwqnPzANTaOIOIKB')
.then(response => response.json())
.then(user => 
    {
        document.getElementById("explanation").innerText = user.explanation;
    })
.catch(error => console.log(error));
});


document.addEventListener("DOMContentLoaded",
    function (event) {
        getWeather('E14,GB');
    });

function getWeather(city) {
    fetch('https://api.openweathermap.org/geo/1.0/zip?zip=' + city + '&appid=a7052a27e407bc3646b4ee73a8905840')
        .then(response => response.json())
        .then(object => {
            console.log(object);
            document.querySelector('.city').innerText = object.name;
            document.querySelector('.country').innerText = object.country;
            document.querySelector('.lat').innerText = object.lat;
            document.querySelector('.lon').innerText = object.lon;
            document.querySelector('.zip').innerText = object.zip;

        })
        .catch(error => console.log(error));
};