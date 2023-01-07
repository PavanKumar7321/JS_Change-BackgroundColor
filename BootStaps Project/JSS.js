'use strict'

// var s =document.write("hai Siri"); console.log(s);

// function sayHai(){
//     alert("Hai siri");
// }
// sayHai("Hello world");


// alert("Welcome back...!");
var Ide=30;
console.log(typeof Ide);

var Ide=50;
console.log(typeof Ide);

var name = "Arjun";console.log(name);

var money=2000.25;console.log(money);

var name = "Ali";
var moneya;
moneya = 2000000.50;
console.log(moneya);



// var x =5+5
// document.write(x);

// var x ="5"+"5"
// document.write(x);
// var x ="5"+5
// document.write(x);
// var x =5+"5"
// document.write(x);


// var prompt=prompt(" YOR AGE IS ");

// if (prompt<=18) {
//     // prompt(" YOR AGE IS "+" "+age);
//     // console.log(age);
//     document.write("Too Young");
    
// } else {
//     document.write("Too older");

    
// }


// var x = 2;
// if (x=21) {
//     console.log("Statement is true");
//     // document.write("Statement is true");
// }
// else{
//     console.log("Statement is false");

// }


// var y = 2;
// if (y =2) {
//     console.log("statement is true");
// } else {
//     console.log("statement is false");

    
// }

// var day = new Date();
// var days =day.getMinutes();
// if (day < 2500) {
//     console.log("Print Date");
    
// } else {
//     console.log("Print Minutes");

    
// }


// var d = new Date();
// var day =d.getHours();
// if (day < 12) 
//  { 
//  document.write("Good morning!"); 
//  } 
// else 
//  { 
//  document.write("Good day!"); 
//  } 


//  var z = 55;
//  if(z == 20){
//     document.write("statement 1");

//  }
//  else if(z <=20){
//     document.write("statement 2");

//  }
//  else{
//     document.write("statement 3");

//  }



//  var  x =1;
//  switch (x) {
//     case 1:
//         document.write("switch case 11");
        
//         break;

//      case 2:
//          document.write("switch case 12"); 
//             break;  
//     case 3:
//          document.write("switch case 13");
                
//         break;
//     case 4:
//         document.write("switch case 14");
                
//         break;  
 
//     default:
//         document.write("switch case default");
//         break;
//  }

//  function sayHello(event){
//     alert("Are you Sure To Proceed...!!");
//     console.log(event.target.value);
    
// }

// function sayDude(event){  
// var x = confirm("press HerE");

// if (x==true ) {
    
// alert("You pressed Ok");

// } else {
// alert("You pressed Cancel");
// }

// }


// var i ;
// for(i = 0;i<=5;i++){
//     document.write("This is for u"+ i);
//     document.write("<br/>");
// }


// var x =5 ;

// while ( x <=25) {
//     document.write("This is for u"+ x);
//     document.write("<br/>");
//     i++;
 
    
// }


// var x = 0;
// do {
//     document.write("This is for u"+ x);
//     document.write("<br/>");
//     i++;
    
// } while (x<=10);

// var x = 0;
// for(x=0; x<=10; x++){
//     if(x ===3){
//         break;
//     }
//     document.write("This is for u"+ x);
//         document.write("<br/>");

// }

// var z = 0;
// for(z=0; z<=10; z++){
//     if(z ===3){
//         continue;
//     }
//     document.write("This is for u"+ z);
//         document.write("<br/>");

// }
        document.write("<br/>");

// var x;
// var myBike = new Array();
// myBike [0] = "Duke";
// myBike [1] = "Shine";
// myBike [2] = "Enfield";
// myBike [3] = "Glamour";

// for(x in myBike){
//     document.write(myBike[x] + "<br />")
// }


// var txt="45 ";
// function message() {

//     try {
//         adddlert("Welcome Back....!!!");

//     } catch (error) {
//         txt="There was an error on this page.\n\n"; 
//         // txt+="Error description: " + err.description + "\n\n";
//         txt+="Click OK to continue.\n\n"; 
//         if (!confirm(txt)) {
//             document.location.href="http://www.w3schools.com/";
//         }
        
//     }
// }


var txt = prompt("Enter the values between 5 to 50:"," ");
try {
    if (txt > 50) {
        throw "Err1";

    } 
        else if(txt <5) {
        throw "Err2";

        }
            else (isNaN(txt))
            {
             throw "Err3";

            }



} catch (er) {
    if(er=="Err1") 
    { 
    alert("Error! The value is too high"); 
    } 
    if(er=="Err2") 
    { 
    alert("Error! The value is too low"); 
    } 
    if(er=="Err3") 
    { 
    alert("Error! The value is not a number"); 
    }
    
}


var txt="We are the so-called Gold \Fishe\"sfrom the north."; 
document.write(txt);




// mop =   "Message";
// mop1 ="Message";
// document.write("Thisnis nota " + mop);
// document.write("Thisnis nota " + mop1);

// document.write("Hello World Sangeetha")

// document.write("Hello \ 
// World!");


// var z = console.log(Math.PI);
// document.write( z);


var x = document.write(Math.round(4.7));

var y = document.write(Math.floor(Math.random()*11));


































































































































































































