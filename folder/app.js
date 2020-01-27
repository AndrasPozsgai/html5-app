window.addEventListener('load',()=> {
        let=long;
        let=lat;
        let temperatureDescription = document.querySelector(".temperature-description");
        let temperatureDegree = document.querySelector(".temperature-degree");
        let locationTimezone = document.querySelector(".location-timzone");

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat  = position.coords.latitude;
  const proxy='https://cors-anywhere.herokuapp.com/';
  const api= '${proxy}
  /*get inforation*/
https://api.darksky.net/forecast/84a76f9f5cf6db445f4390ca618445a8/${lat},${long}';
  fetch(api)
  .then(response=>{
    return response.json();
    /*get information*/
  })
  .then(data => {
    console.log(data);
    const{temperature, summary} = data.currently;
    //set doom elements from API
    temperatureDegree.textContent = temperature;
    tempereatureDescription.textContent=summary;
  });
});
