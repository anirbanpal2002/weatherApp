// const apiKey="c922437db1eb51ee347f039739b64971";
// const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox= document.querySelector(".search input")
// const searchBtn= document.querySelector(".search button")


// async function fetchWeather(city) {
// 	const response=await fetch(apiurl + city + `&appid=${apiKey}`);
// 	var data =await response.json();

// 	console.log(data)

// 	document.querySelector(".city").innerHTML=data.name;
// 	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
// 	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
// 	document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
// }

// searchBtn.addEventListener("click", ()=>{
// 	fetchWeather(searchBox.value);
// })


document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "c922437db1eb51ee347f039739b64971";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon =document.querySelector(".weather-icon");

    async function fetchWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main=="Drizzel"){
            weatherIcon.src="images/drizzel.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
        // else if(data.weather[0].main=="Clouds"){
        //     weatherIcon.src="images/clouds"
        // }

        document.querySelector(".weather").style.display="block";
    }

    searchBtn.addEventListener("click", () => {
        fetchWeather(searchBox.value);
    });
});
