// Hamburger menu functionality
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
});

// Accordion menu functionality 
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   });
});

// Image slider functionality
var counter = 1;
setInterval(function(){
   document.getElementById("radio" + counter).checked = true;
   counter++;
   if(counter > 4){
      counter = 1;
   }
}, 4000);

// Weather in Village api 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        console.log(apiResult);
        console.log(apiResult.name);
        console.log(apiResult.weather[0].description);
        

        function showCity() {
            // apiResult.sort(function(a, b){return 0.5 - Math.random()});
            var cityHeader = document.getElementById("top-header");
            var cityName = document.createElement("p");
            cityHeader.appendChild(cityName);
            var cityText = document.createTextNode(apiResult.name);
            cityName.appendChild(cityText);
        };
        showCity();

        function showWeatherDescrip() {
            var weatherSection = document.getElementById("main-section");
            var weatherDescrip = document.createElement("p");
            weatherSection.appendChild(weatherDescrip);
            var weatherText = document.createTextNode(apiResult.weather[0].description);
            weatherDescrip.appendChild(weatherText);
        };
        showWeatherDescrip();
        
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=34747,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();