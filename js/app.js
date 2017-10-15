$(document).foundation()

/*
Do NOT Touch Above
*/

// getTime (works)
// var date1 = new Date();
// var nSeconds = date1.getMilliseconds();
// document.getElementById("mseconds1").innerHTML = nSeconds;

// refresh timer 10min
setTimeout(function(){
   window.location.reload(1);
}, 60000); //why is this in ms

// Rotating "circle" for splash page
// center points
var centerx = $(window).width() / 2
var centery = $(window).height() / 2;

/*rotating circle*/
var Canvas = document.getElementById("circle_canvas");
var ctx = Canvas.getContext("2d");

/*make rely on current time later if have time*/
var startAngle = (2*Math.PI);
var endAngle = (Math.PI*1.5);
var currentAngle = 0;

var oldTime = getTime();

function getTime() {
return (new Date()).getTime();
}

var raf = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

function Update(){
    var newTime = getTime(),
        diff = newTime - oldTime;

    oldTime = newTime;

    //Clears
    ctx.clearRect(0,0,Canvas.width,Canvas.height);

    //Drawing
    ctx.beginPath();
    ctx.arc(centerx, centery, 200, startAngle + currentAngle, endAngle + currentAngle, false);

    ctx.strokeStyle = "#F5F5DC";
    ctx.lineWidth = 20.0;
    ctx.stroke();

    currentAngle += diff * 0.001;

    currentAngle %= 2 * Math.PI;

    // document.getElementById("angle").innerHTML=currentAngle;
    raf(Update);
}
raf(Update);
/*rotating cirlce (end)*/
