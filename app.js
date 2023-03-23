
// **********************fetching wether data by fetch method****************
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4853e23df9msh9f43d5c1f51ca03p1994a3jsn0bdce0efdeff",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

function landingApi(Name){
  // taking refrence***********************
  let Country = document.getElementById("countryName");
  let region = document.getElementById("region");
  let temp = document.getElementById("temp");
  let wether_type = document.getElementById("wether_type");
  let cloud_img = document.getElementById("cloud_img");
  let feelsLike = document.getElementById("feelsLike");
  let forecast_item = document.getElementById("forecast_item");
  let wind_blow = document.getElementById("wind_blow");
  let current_city = document.getElementById("current_city");
  let visiblity = document.getElementById("visiblity");
  let pressure = document.getElementById("pressure");
  let humidity = document.getElementById("humidity");
  let hourley_btn = document.getElementById("hourly");
  let hourley_container = document.getElementById('weather_hourly');
  let wether_container = document.getElementById('wether_container');
  let forecast_container = document.getElementById('forecast');
  let table_tbody = document.getElementById('table_tbody');
  let today_btn = document.getElementById('today');
  let forcast_btn = document.getElementById('forcast');
  let country = Name;
  // landing page data fetching api
  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${country}&days=3`,
    options
  )
    .then((response) => response.json())
    .then((report) => {
      Country.innerHTML = `<b>COUNTRY :</b> ${report.location.country}`;
      region.innerHTML = `<b>REGION :</b> ${report.location.region}`;
  
      temp.innerHTML = `${report.current.temp_c} °C`;
      wether_type.innerHTML = `${report.current.condition.text}`;
      cloud_img.innerHTML = "";
      let Cimg = document.createElement("img");
      Cimg.src = `${report.current.condition.icon}`;
      cloud_img.append(Cimg);
      feelsLike.innerHTML = `Feels Like: ${report.current.feelslike_c} °C`;
      forecast_item.innerHTML = `Forecast: ${report.forecast.forecastday[0].day.maxtemp_c} - ${report.forecast.forecastday[0].day.mintemp_c} °C`;
      wind_blow.innerHTML = `Wind: ${report.current.wind_kph} Km/k  from  ${report.current.wind_dir} `;
      current_city.innerHTML = `${report.location.name}`;
      visiblity.innerHTML = `${report.current.vis_km} Km`;
      pressure.innerHTML = `${report.current.pressure_mb} mbar`;
      humidity.innerHTML = `${report.current.humidity}%`;

      // weather Today btn  clicked fetting data
      today_btn.addEventListener("click",()=>{
        wether_container.style.display = "flex";
        hourley_container.style.display = "none";
        hourley_btn.style = 'background: transparent;color: #ffffff;';
        today_btn.style = 'background: #ffffff;color: #000000;';
        forecast_container.style.display = "none";
        forcast_btn.style = 'background: transparent;color: #ffffff;';
        
  
      Country.innerHTML = `<b>COUNTRY :</b> ${report.location.country}`;
      region.innerHTML = `<b>REGION :</b> ${report.location.region}`;
  
      temp.innerHTML = `${report.current.temp_c} °C`;
      wether_type.innerHTML = `${report.current.condition.text}`;
      cloud_img.innerHTML = "";
      let Cimg = document.createElement("img");
      Cimg.src = `${report.current.condition.icon}`;
      cloud_img.append(Cimg);
      feelsLike.innerHTML = `Feels Like: ${report.current.feelslike_c} °C`;
      forecast_item.innerHTML = `Forecast: ${report.forecast.forecastday[0].day.maxtemp_c} - ${report.forecast.forecastday[0].day.mintemp_c} °C`;
      wind_blow.innerHTML = `Wind: ${report.current.wind_kph} Km/k  from  ${report.current.wind_dir} `;
      current_city.innerHTML = `${report.location.name}`;
      visiblity.innerHTML = `${report.current.vis_km} Km`;
      pressure.innerHTML = `${report.current.pressure_mb} mbar`;
      humidity.innerHTML = `${report.current.humidity}%`;
      });
      // hourley btn clicked fetting data
      hourley_btn.addEventListener("click", () => {
        wether_container.style.display = "none";
        hourley_container.style.display = "flex";
        hourley_btn.style = 'background: #ffffff;color: #000000;';
        today_btn.style = 'background: transparent;color: #ffffff;';
        forecast_container.style.display = "none";
        forcast_btn.style = 'background: transparent;color: #ffffff;';

        hourley_container.innerHTML = "";
            report.forecast.forecastday[0].hour.map(item=>{
              let div = document.createElement('div');
              let paraTime = document.createElement('p');
              let paraTemp = document.createElement('p');
              let paraFeels = document.createElement('p');
              let paraWind = document.createElement('p');
              let paraPress = document.createElement('p');
              let Innerdiv = document.createElement('div');
              let paraText = document.createElement('p');
              let CloudImage = document.createElement('img');
      
              div.className = "card";
              Innerdiv.className = "condition";
              paraTime.innerHTML = `Time: ${item.time}`;
              paraText.innerHTML = `${item.condition.text}`;
              CloudImage.src = `${item.condition.icon}`;
              Innerdiv.append(paraText,CloudImage);
              paraTemp.innerHTML = `Temperature : ${item.temp_c} °C` ;
              paraFeels.innerHTML = `Feels Like : ${item.feelslike_c} °C`;
              paraWind.innerHTML = `Wind-Flow : ${item.wind_dir}`;
              paraPress.innerHTML = `Pressure : ${item.pressure_mb}`;
              div.append(paraTime,Innerdiv,paraTemp,paraFeels,paraWind,paraPress);
              hourley_container.append(div);
            })});
            //forecast fatching api data***********
            forcast_btn.addEventListener("click", () => {
              wether_container.style.display = "none";
              hourley_container.style.display = "none";
              forecast_container.style.display = "block";
              hourley_btn.style = 'background: transparent;color: #ffffff;';
              today_btn.style = 'background: transparent;color: #ffffff;';
              forcast_btn.style = 'background: #ffffff;color: #000000;';
  
              table_tbody.innerHTML = "";
                  report.forecast.forecastday.map(item=>{
                    let tr = document.createElement('tr');
                    tr.innerHTML = "";
                    let td1 = document.createElement('td');
                    td1.className = "border";
                    td1.innerHTML = `${item.date}`;
                    let td2 = document.createElement('td');
                    let icon = document.createElement('img');
                    let para = document.createElement('p');
                    icon.src = `${item.day.condition.icon}`;
                    para.innerHTML = ` ${item.day.maxtemp_c}/${item.day.mintemp_c} °C`
                    td2.append(icon,para);
                    td2.style.display = "flex";
                    td2.style.alignItems = "center";
                    let td3 = document.createElement('td');
                    td3.className = "border";
                    td3.innerHTML = `${item.day.condition.text}`;
                    let td4 = document.createElement('td');
                    td4.className = "border-bottom";
                    td4.innerHTML = `${item.day.avgtemp_c} °C`;
                    let td5 = document.createElement('td');
                    td5.className = "border-bottom";
                    td5.innerHTML = `${item.day.maxwind_kph} KM/H`;
                    let td6 = document.createElement('td');
                    td6.className = "border-right border-bottom";
                    td6.innerHTML = `${item.day.avghumidity}%`
                    let td7 = document.createElement('td');
                    td7.className = "border-bottom mobile_screen_display_none";
                    td7.innerHTML = `${item.day.daily_chance_of_rain}%`
                    let td8 = document.createElement('td');
                    td8.className = "border-right border-bottom mobile_screen_display_none";
                    td8.innerHTML = `${item.day.daily_will_it_rain}mm`;
                    let td9 = document.createElement('td');
                    td9.className = "border-bottom mobile_screen_display_none";
                    td9.innerHTML = `${item.day.uv}`
                    let td10 = document.createElement('td');
                    td10.className = "border-bottom mobile_screen_display_none";
                    td10.innerHTML = `${item.astro.sunrise}`
                    let td11 = document.createElement('td');
                    td11.className = "border-bottom mobile_screen_display_none";
                    td11.innerHTML = `${item.astro.sunset}`;
  
                    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11);
                    table_tbody.appendChild(tr);
                  })});
    })
    .catch((err) => console.error(err));
};
landingApi(Name = "India")

// Getting local time with date and rendering to the html page by object datatype new Date*************

function livetime() {
  setInterval(() => {
    let live_time = document.getElementById("live_time");
    let current_time = document.getElementById("current_time");
    let liveTime = new Date().toLocaleTimeString();
    live_time.innerHTML = liveTime;
    let TimeDate = new Date().toLocaleString();
    current_time.innerHTML = TimeDate;
  }, 1000);
}
livetime();

// search the country or state ***********************
let search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", () => {
  let Search = document.getElementById("country");
  if(Search.value != ""){
    return landingApi(Name = Search.value);
  }else{
    return false
  }
});


// *****************fetch api url with key*********************************************************
// const options1 = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "4853e23df9msh9f43d5c1f51ca03p1994a3jsn0bdce0efdeff",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//   },
// };
// fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=delhi&days=3",options1)
// .then(response=>response.json())
// .then(data=> console.log(data));
//*********************************************************************************************** */