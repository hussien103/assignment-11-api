
 
  navigator.geolocation.getCurrentPosition(position => {
    const {latitude,longitude} = position.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    
    var res;
    (async function(){
        var x = await fetch(url);
         res = await x.json();
         
         var curr_location =res.address.city;
         var y = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0a3af879e1634c82a7e104043231808&q=${curr_location}&days=3`)    
         res2  = await y.json();
         const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
         var givenDate = new Date (res2.current.last_updated);
         var dayOfWeek = givenDate.getDay();
         var dayName = dayNames[dayOfWeek]; 
         
         const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
         const dayOfMonth = givenDate.getDate();
        
         const monthNumber = givenDate.getMonth();
         
         const monthName = monthNames[monthNumber];
         const tommorowDay = dayNames[dayOfWeek+1];
         const afterTommorow = dayNames[dayOfWeek+2];
         const formattedDate = `${dayOfMonth} ${monthName}`;
         console.log(res2);
         
         document.getElementById('forecastTable').innerHTML=`
         <div class="container p-0 fore-table m-auto row">

         <div class="col-4 p-0 forecast-container rounded-start-2">
             <div class="d-flex justify-content-between  forecast-header">
                 <span>${dayName}</span>
                 <span>${formattedDate}</span>
             </div>
             <div class="forecast-content">
                 <h3>${res.address.city}</h3>
             <div class=" d-flex justify-content-between">
             <h1 class="text-white">${res2.current.temp_c}</h1>
             <img src='https:${res2.current.condition.icon}' class="w-25">
         </div>
         <p class="table-p">${res2.current.condition.text}</p>
         <div class="d-flex ">
             <div class="d-flex">
             <img src="images/icon-umberella.png">
             <small>East</small>
         </div>
         <div class="d-flex mx-3 "> 
             <img src="images/icon-wind.png">
             <small>18km/h</small>
         </div>
         <div class="d-flex ">
             <img src="images/icon-compass.png">
             <small>East</small>
         </div>
      </div>
     
         </div>
         </div>
         <div  class="col-4 forecast-container p-0">
             <div class="d-flex justify-content-center forecast-header align-items-center ">
                <span>${tommorowDay}</span>
             </div>
             <div class="forecast-content text-center">
                 <img src='https:${res2.forecast.forecastday[1].day.condition.icon}' class="w-25 ">
                 <h2 class="text-white fs-4">${res2.forecast.forecastday[1].day.maxtemp_c}</h2>
                 <h3 class="fs-6">${res2.forecast.forecastday[1].day.mintemp_c}</h3>
                 <p class="table-p mt-4">${res2.forecast.forecastday[1].day.condition.text}</p>
             </div>
         </div>
         <div class="col-4 p-0 forecast-container rounded-end-2">
             <div class="d-flex justify-content-center forecast-header align-items-center ">
                 <span>${afterTommorow}</span>
              </div>
              <div class="forecast-content text-center">
                  <img src='https:${res2.forecast.forecastday[2].day.condition.icon}'class="w-25 ">
                  <h2 class="text-white fs-4">${res2.forecast.forecastday[2].day.maxtemp_c}</h2>
                  <h3 class="fs-6">${res2.forecast.forecastday[2].day.mintemp_c}</h3>
                  <p class="table-p mt-4">${res2.forecast.forecastday[2].day.condition.text}</p>
              </div>
         </div>
        </div>
     
         `;
             })();

             


    });

   console.log(document.getElementById('searchBar'));
    document.getElementById('searchBar').addEventListener('keyup', async function(){
console.log(this.value);
        var y = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0a3af879e1634c82a7e104043231808&q=${this.value}&days=3`)    
        var res2  = await y.json();
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var givenDate = new Date (res2.current.last_updated);
        var dayOfWeek = givenDate.getDay();
        var dayName = dayNames[dayOfWeek]; 
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayOfMonth = givenDate.getDate();
       
        const monthNumber = givenDate.getMonth();
        
        const monthName = monthNames[monthNumber];
        const tommorowDay = dayNames[dayOfWeek+1];
        const afterTommorow = dayNames[dayOfWeek+2];
        const formattedDate = `${dayOfMonth} ${monthName}`;
        console.log(res2);
        
        document.getElementById('forecastTable').innerHTML=`
        <div class="container p-0 fore-table m-auto row">

        <div class="col-4 p-0 forecast-container rounded-start-2">
            <div class="d-flex justify-content-between  forecast-header">
                <span>${dayName}</span>
                <span>${formattedDate}</span>
            </div>
            <div class="forecast-content">
                <h3>${res2.location.name}</h3>
            <div class=" d-flex justify-content-between">
            <h1 class="text-white">${res2.current.temp_c}</h1>
            <img src='https:${res2.current.condition.icon}' class="w-25">
        </div>
        <p class="table-p">${res2.current.condition.text}</p>
        <div class="d-flex ">
            <div class="d-flex">
            <img src="images/icon-umberella.png">
            <small>East</small>
        </div>
        <div class="d-flex mx-3 "> 
            <img src="images/icon-wind.png">
            <small>18km/h</small>
        </div>
        <div class="d-flex ">
            <img src="images/icon-compass.png">
            <small>East</small>
        </div>
     </div>
    
        </div>
        </div>
        <div  class="col-4 forecast-container p-0">
            <div class="d-flex justify-content-center forecast-header align-items-center ">
               <span>${tommorowDay}</span>
            </div>
            <div class="forecast-content text-center">
                <img src='https:${res2.forecast.forecastday[1].day.condition.icon}' class="w-25 ">
                <h2 class="text-white fs-4">${res2.forecast.forecastday[1].day.maxtemp_c}</h2>
                <h3 class="fs-6">${res2.forecast.forecastday[1].day.mintemp_c}</h3>
                <p class="table-p mt-4">${res2.forecast.forecastday[1].day.condition.text}</p>
            </div>
        </div>
        <div class="col-4 p-0 forecast-container rounded-end-2">
            <div class="d-flex justify-content-center forecast-header align-items-center ">
                <span>${afterTommorow}</span>
             </div>
             <div class="forecast-content text-center">
                 <img src='https:${res2.forecast.forecastday[2].day.condition.icon}'class="w-25 ">
                 <h2 class="text-white fs-4">${res2.forecast.forecastday[2].day.maxtemp_c}</h2>
                 <h3 class="fs-6">${res2.forecast.forecastday[2].day.mintemp_c}</h3>
                 <p class="table-p mt-4">${res2.forecast.forecastday[2].day.condition.text}</p>
             </div>
        </div>
       </div>
    
        `;

     })