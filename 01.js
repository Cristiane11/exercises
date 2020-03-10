//Write a JavaScript program to display the current day and time in the following format
var today = new Date();
var day = today.getDay();
var currentTime =today.getHours();
var minutes= today.getMinutes();
var secundos= today.getSeconds();
 

var elUno = document.getElementById('uno');
elUno.innerHTML ='<p>Today : ' + today +'</p>';

var horas = document.getElementById('time');
horas.innerHTML ='<p> Current Time:' + currentTime + minutes + secundos + '</p>';
