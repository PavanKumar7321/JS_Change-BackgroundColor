'use strict';
                         // TIMERS
// let sayHai=()=>{
//     alert("Are U Sure")

// };
// setTimeout(sayHai, 10000);

// let sayHai = ()=>{
//     console.log("SAY HAI HELLO");
// }

// setInterval(sayHai , 4000);

// let timer=setInterval(sayHai , 2000);
// console.log(timer);

// setTimeout(() => {
//     clearInterval(timer);
//     alert("TIME IS OVER")
    
// }, 10000);

// EVENTS

function  clicker(){
    var boxs = document.getElementById("boxs");
    var prag = document.createElement('p');
    prag.innerHTML = "Hello Everyone. I am generated because you clicked on a button!!"
    boxs.appendChild(prag);
    prag.style.color="yellow";
    prag.style.backgroundColor="red";



}

function  Sayclicker(){
    var boxs = document.getElementById("boxs");
    var prag = document.createElement('p');
    prag.innerHTML = "Java Scripit Is Easy And Hard To Learn Programme"
    boxs.appendChild(prag);
    prag.style.color="orange";
    prag.style.backgroundColor="blue";


    
}

function onChangableTo(event){
    console.log("Value Will Be Changed",event.target.value);

}


function onKeyWord(event){
    console.log("enter Key", event.target.value);
}


function onMouseOver(event){
    console.log(event);
    document.getElementById("mouse").style.backgroundColor="red";
}

function onMouseOut(event){
    console.log(event);
    document.getElementById("mouse").style.backgroundColor="white";
}















