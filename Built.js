'use strict';
document.getElementById("btn").addEventListener('click',(event)=>{
    alert("Button Clicked");
});


document.getElementById("drop").addEventListener('change',(event)=>{
    alert("You Select This " +event.target.value+ " Course");
});


// PI
var par = (Math.PI);
document.write(" Value is",par);

// sqrt2
var par = (Math.SQRT2);
document.write(" Value is",par);

// round
var par = (Math.round(8.95));
document.write(" Value is",par);

//Trun
var par = (Math.trunc(8.95));
document.write(" Value is",par);

// celi
var par = (Math.ceil(3.95));//4
document.write(" Value is",par);

// floor
var par = (Math.floor(3.95));//3
document.write(" Value is",par);

// sign
var par = (Math.sign(-255));//-1
document.write(" Value is",par);

var par = (Math.random());
 document.write("value",par);

 var par = (Math.max(10,20,30,150,369,2365,8522,12,15,15));
 document.write("value",par);

var par = (Math.min(10,20,30,150,369,2365,8522,12,15,15));
 document.write("value",par);