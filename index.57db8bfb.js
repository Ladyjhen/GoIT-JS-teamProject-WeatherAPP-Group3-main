function e(e){let t=localStorage.getItem("favoriteCity"),n=document.getElementById("favoriteBtn");t===e?(n.innerText="Favorited",n.disabled=!0):(n.innerText="Favorite",n.disabled=!1)}function t(){return document.querySelector('input[name="unit"]:checked').value}function n(n){let a=t();fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=f1a7f601f87c9d97579ef8237cc83ff1&units=${a}`).then(e=>e.json()).then(t=>{let i=t.weather[0].description,r=t.main.temp,o=t.weather[0].icon,c=new Date(1e3*t.sys.sunrise).toLocaleTimeString(),d=new Date(1e3*t.sys.sunset).toLocaleTimeString(),m=`
                <img src="https://openweathermap.org/img/wn/${o}@2x.png" alt="Weather icon">
                <p>Weather: ${i}</p>
                <p>Temperature: ${r}${"metric"===a?"°C":"°F"}</p>
                <p>Sunrise: ${c}</p>
                <p>Sunset: ${d}</p>
            `;document.getElementById("currentforecast").innerHTML=m,document.getElementById("cityName").innerText=n;let l=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"});document.getElementById("currentdate").innerText=`Date: ${l}`,e(n)}).catch(e=>{console.error("Error fetching weather data:",e),document.getElementById("currentforecast").innerText="Error fetching weather data",document.getElementById("currentdate").innerText=""})}function a(e){let n=t();fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=f1a7f601f87c9d97579ef8237cc83ff1&units=${n}`).then(e=>e.json()).then(e=>{!function(e){let n=document.getElementById("forecast"),a="metric"===t()?"°C":"°F";for(let i in n.innerHTML="",e){let r=e[i],o=Math.min(...r.map(e=>e.main.temp_min)),c=Math.max(...r.map(e=>e.main.temp_max)),d=document.createElement("div");d.classList.add("day");let m=`https://openweathermap.org/img/w/${r[0].weather[0].icon}.png`;d.innerHTML=`
            <div>${new Date(1e3*r[0].dt).toDateString()}</div>
            <img src="${m}" alt="${r[0].weather[0].description}">
            <div>Min Temp: ${o}${a}</div>
            <div>Max Temp: ${c}${a}</div>
        `,d.addEventListener("click",function(){(function(e){let n=document.getElementById("weatherInfo");t(),n.innerHTML=""})(0)}),n.appendChild(d)}}(e.list.reduce((e,t)=>{let n=t.dt_txt.split(" ")[0];return e[n]||(e[n]=[]),e[n].push(t),e},{}))}).catch(e=>{console.error("Error fetching data:",e)})}document.addEventListener("DOMContentLoaded",function(){let t=localStorage.getItem("favoriteCity")||"Balanga";n(t),e(t)}),document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("cityInput").value;n(t),a(t)}),document.getElementById("favoriteBtn").addEventListener("click",function(){let t=document.getElementById("cityName").innerText;localStorage.setItem("favoriteCity",t),alert(`${t} has been added to your favorites!`),e(t)}),document.querySelectorAll('input[name="unit"]').forEach(e=>{e.addEventListener("change",function(){a(document.getElementById("cityInput").value||localStorage.getItem("favoriteCity")||"Balanga")})}),weatherData.forEach(e=>{document.createElement("div"),new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),e.main.temp,e.weather[0].description,e.clouds.all,e.wind.speed,e.visibility,e.weather[0].icon}),weatherElement.innerHTML=`
            <div>${time}</div>
            <img src="${icon}`;
//# sourceMappingURL=index.57db8bfb.js.map
