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
        // var data = await response.json();

        // console.log(data);
        if(response.status==404){
            document.querySelector(".error").style.display="block";  
            document.querySelector(".weather").style.display="none";  
        }
        else{
            var data = await response.json();
            // console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML =Math.round (data.wind.speed) +"km/h";
            document.querySelector(".status").innerHTML = data.weather[0].description;
            document.querySelector(".feel").innerHTML= Math . round(data.main.feels_like) + "°C";

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
            else if(data.weather[0].main=='Snow'){
                weatherIcon.src="images/snow.png"
            }
            else if(data.weather[0].main=="Haze"){
                weatherIcon.src="images/haze.png"
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";

        }

        
    }


    searchBtn.addEventListener("click", () => {
        fetchWeather(searchBox.value);
    });
});


//off all Ctl+key 
function disableCtrlKeyCombination(e){
//list all CTRL + key combinations you want to disable
    const forbiddenKeys = ['a', 'n', 'c', 'x', 'v', 'j', 'w', 'i', 'p','u'];
    let key;
    let isCtrl;
    if(window.event){
        key = window.event.keyCode; //IE
        isCtrl = !!window.event.ctrlKey;
    }
    else{
        key = e.which; //firefox
        isCtrl = e.ctrlKey;
    }
//if ctrl is pressed check if other key is in forbidenKeys array
    if(isCtrl){
    for(i=0; i<forbiddenKeys.length; i++){
    //case-insensitive comparator
        if(forbiddenKeys[i].toLowerCase() === String.fromCharCode(key).toLowerCase()){    
        alert('CTRL events has been disabled');        
        return false;
        }
    }
}
return true;
}

//diable right key 
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled');    
    }, false);
