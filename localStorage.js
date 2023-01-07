'use strict';

// var firstNam = ' ';
// document.getElementById("firstNam").addEventListener('keydown',(event)=>{

//     firstNam=event.target.value;
//     console.log(firstNam);


// });


// document.getElementById("btn").addEventListener('click',()=>{
//     localStorage.setItem('name',firstNam )
// document.getElementById("setna").textContent = localStorage.getItem('name')

// });

 var colors = ['white','yellow','orange','red','golden','pink','brown','blue','black','cyan','dark gray','violet','green','silver','chocolate','navy blue','Lime','khaki','cherry'];
 var len = colors.length-1;

    var buttonCont = document.getElementById('btn');
    var spanCont = document.querySelector('.color');

    buttonCont.addEventListener('click', (event) => {
        var index = generateRandomNumber();
        document.body.style.backgroundColor = colors[index];
        console.log(colors[index]);
        spanCont.textContent = colors[index];
       })
       function generateRandomNumber(){
        return Math.round(Math.random() * len);
       }