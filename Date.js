'use strict';


// function onMouseOver(event){
//     console.log(event);
//     document.getElementById("btnn").style.backgroundColor="yellow";
// }

// function onMouseOut(event){
//     console.log(event);
//     document.getElementById("btnn").style.backgroundColor="red";
// }
// var dat = new Date()

var dat =new Date();

console.log("This is the Year  ",dat.getFullYear());
console.log("This is the Month ",dat.getMonth());
console.log("This is the Date ",dat.getDate());
console.log("This is the Hours ",dat.getHours());
console.log("This is the Seconds ",dat.getSeconds ());
console.log("This is the MilliSeconds ",dat.getMilliseconds);
console.log("This is the Time ",dat.getTime());
console.log("This is the Day ",dat.getDay());


var newMon = new Date();
newMon.setHours(3);
newMon.setDate(13);
newMon.setTime(3);
newMon.setMinutes(35);
newMon.setFullYear(2020);



console.log(newMon);
document.getElementById("contain").addEventListener('click',()=>{
 document.write(dat)
});




