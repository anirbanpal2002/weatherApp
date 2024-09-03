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

    async function fetchWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    }

    searchBtn.addEventListener("click", () => {
        fetchWeather(searchBox.value);
    });
});
