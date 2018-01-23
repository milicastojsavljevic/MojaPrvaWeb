/*var timer = document.getElementById('timer');
var loop;

function displayTime(){
	var sada = new Date();
	var h = sada.getHours();
	var m = sada.getMinutes();
	var s = sada.getSeconds();

	timer.innerHTML =h+':'+m+':'+s+' h';
}
loop = setInterval(displayTime,1000);*/

jQuery(document).ready(function($){


$('div:not(#content, #timer, #ime, #uvod, #header, #glavno, #sporedno, .dodatak)').append('<div class="close">x</div>');/*ovde moram da upisem svaki div za koji 
ne zelim "x" za uklanjanje div-a sa strane*/ 

$('.close').on('click', function(event){
	$(this).parent().hide();
})
/*$('#ime').animate(
	{width : 120, height : 40},    //arg 1 sta se menja, ne mora u apostrofe
	 2000,                         // arg 2 za koliko vremena, u milisekundama
	'swing',                       // arg 3 nacin promene
	                               //ne znamm kako da se smanji kad se vrati u prvobitni polozaj
	);*/
});

//kod sa w3scool samo sam boju promenila
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, 'rgb(20, 129, 135)');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'rgb(20, 129, 135)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = 'rgb(20, 129, 135)'; 
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);  
     ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
     hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
     ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

// kada se pomerim 100px na dole
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
//kada kliknem na btn vrati me gore
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; 
}
