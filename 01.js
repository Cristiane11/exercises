//Write a JavaScript program to display the current day and time in the following format
var today = new Date();
var day = today.getDay();
var weekDays =["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var currentDay =weekDays[day];
var currentTime =today.getHours();
var minutes= today.getMinutes();
var secundos= today.getSeconds();

if (currentTime===0 && currentTime>=12){
    dayTime= AM;
}else{
    dayTime= PM;
}

var elUno = document.getElementById('uno');
elUno.innerHTML ='<p>Today is : ' + currentDay +'</p>';

var horas = document.getElementById('time');
horas.innerHTML ='<p> Current Time:' + currentTime + minutes + secundos + '</p>';
