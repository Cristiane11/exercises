//Write a JavaScript program to display the current day and time in the following format
var today = getDay();
var currentTime = getHours();
var minutes= getMinutes();
var secundos= getSeconds();

var elUno = document.getElementById('uno');
elUno.innerHTML ='<p>Today : ' + today +'</p>';

var horas = document.getElementById('time');
horas.innerHTML ='<p> Current Time:' + currentTime + minutes + secundos + '</p>';
