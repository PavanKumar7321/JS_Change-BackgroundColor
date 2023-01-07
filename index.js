'use strict';
// console.log('hello world....');


// var str = "JavaScripit";
// console.log(str);

// var str = 'java';
// console.log(str);

// var lastname;
// console.log(lastname);

// var name = 'pavan';
// console.log(typeof name);

// var s = 909;
// console.info(typeof s);

// var null;
// console.info(typeof s);


// var name ='pavan';
// var age =22;
// var qs='b.tech';
// var ht = 6;
// var gn ='male';

// console.info(typeof name);
// console.info(typeof age);
// console.info(typeof qs);
// console.info(typeof ht);
// console.info(typeof gn);



// var man ={
//     //  name ='pavan', var age =22, var qs='b.tech', var ht = 6, var gn ='male',
//     name:"pavan", age: 22, qs: 'b.tech',ht:  6, gn: 'male'

// };
// console.info(man);


// var person = new Object();
// person.name = "Sucheendra",
// person.age = 27,
// person.gender = "Male"
// person['firstname'] = "vishnu";
// console.info(person);


// var person = {
// firstname:'pavan',
// age:22,
// height:6,
// gender:'male',
// sleep: function(){
//     console.log("pavan is sleeping...!!!");
// }

// }


// var keys = Object.keys(person);
// console.log(keys)

// var values = Object.values(person);
// console.log(values)


// NAN  

// var s = 100;
// var p ='pavan';
// console.log(s/p);


//NANCY   nit use n and  value

// console.log( 100/'pavan'+"CY");
// console.log("BA"+ 100/"p"+"A");



// var p = "sowmya";
// var r = "rakesh";
// console.log(p+" "+r);

// var name = "foruiz is a good Per\"son ";
// console.log(name);



// var p = "java";
// var p1 =new String("java");
// console.log(p===p1);
// console.log(typeof p);
// console.log(typeof p1);


// charAt()

// var person = " Hello JavaScripit";
// console.log(person);
// console.log(person.length);
// console.log(person.charAt(2));
// console.log(person[5]);

// l &u

// var t1 = "soumya "
// var t2 = "SOUMYA "
// console.log(t2.toLowerCase());
// console.log(t1.toUpperCase());


// SLICE

// var person = "  HAI HELLO PAVAN  PAVAN  PAVAN  EVERYONE ...!!  ";
// var man = "  HAI HELLO JAVA JS PTHON  EVERYONE ...!!  ";

// console.log(person.slice(2));
// console.log(person.slice(-2));
// console.log(person.slice(2,11));

// console.log(person.substring(2));
// console.log(person.substring(-2));
// console.log(person.substring(2,11));


// console.log(person.replace('PAVAN', ' SOWMYA'));
// console.log(person.replaceAll('PAVAN', ' SOWMYA'));


// console.log(person.trim()+"js");
// console.log(person.concat(man));

// ARRAYS//                  

// let arr = new Array(1,2,3,34,4,45,5,66,4);
// console.log(arr);


// var car ="skoda";
// var car1= "audi";
// var car2= "BMW";
// console.log(car);
// console.log(car1);
// console.log(car2);

// // var cars = [audi, bmw, skoda];
// // console.log(cars);

// var man = ["audi", "bmw", "skoda"];
// console.log(man);

// var car = [1,2,3,4,5,6,{},[1,2,3,4,[22,33,44,55,[333,444,555,666,[4444,555,666666,666]]],4,4],"sam","joe",true];
// console.log('First way', car);
// console.log(car[7]);
// console.log('First way', car.length);

// var toys = [1,2,3,4,5,6,7,8]
// console.log(toys);
// toys.push("pavan");
// toys.push("vin");
// toys.push("naveen");
// toys.push("raj");
// // toys.push([22333.444,333,]);
// console.log(toys);
// toys.pop();
// toys.pop();
// toys.pop();
// toys.pop();
// console.log(toys);
// toys.shift();
// toys.shift();
// toys.shift();
// toys.shift();
// console.log(toys);

//indexOf

// var stu = [1,2,3,4,"doremon","rangers","tom","jerry"];
// console.log(stu.indexOf("toy"));

//join
// console.log(stu.join());
// console.log(stu.join('.'));
// console.log(stu.join('-'));
// console.log(stu.join('*'));

//includes
// console.log(stu.includes("tom jerry"));
// console.log(stu.includes("tom"));
// console.log(stu.includes("jerry"));

//reverse
// console.log(stu);
// console.log(stu.reverse());

//slice
// var stu = [1,2,3,4,"doremon","rangers","tom","jerry"];
// console.log(stu.slice(2,4));
// console.log(stu.slice(2));
// console.log(stu.slice(-4));

/* splice
var stu = [1,2,3,4,"doremon","rangers","tom","jerry"];
console.log(stu);
console.log(stu.splice(2,4));
console.log(stu.splice(5));
console.log(stu.splice(-4));
console.log(stu.indexOf(2),2);
console.log(stu.indexOf(4),3); */

// destructuring...!
// Old 
var arr =[10,20,30,40,50]
// var num1 = arr[0]
// var num2 = arr[1]
// var num3 = arr[2]
// console.log(num1,num2,num3);


// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// var [num1, num2, ...rest] = arr;

// console.log(num1 + " " + num2); //10 20
// console.log(rest)

// var student = {
//     firstName: "pavan",
//     lastName: "kumar"
//    }
//    var fName = student.firstName;
//    var lName = student.lastName;
//    console.log(fName + " " + lName);
//    var {firstName, lastName} = student;
//    console.log(firstName+ " "+lastName);


//if-else

// var p = [1,2,3,4,44,55,66];
// if(3){
//     console.log(p);
// }else{
//     console.log("not there");
// }

// var n1 ="pavan"

// if (n1.includes("pavan")) {
//     console.log("is there");
    
// } else {
//     console.log("not there");
    
// }

// var firstName = "pavan";
// switch(firstName) {
//  case "Sachin": 
//  console.log("My name is Sachin");
//  break;
//  case "Virat": 
//  console.log("My name is Virat");
//  case "bhanu": 
//  console.log("My name is bhanu");
// //  case "pavan": 
// //  console.log("My name is pavan");
//  break;
//  default: 
//  console.log("My name is something else");
//  break;
// }


// ternary operator


// var fName ="pavan"
// fName.includes("kumar")? console.log("My name is kumar"):console.log("My name is some thing else");

//for loops

//var p1 =0;
// for(var i =0; i< 1000;i++){

//     console.log("Number"+ i);
// }


// while loop

// var i =0;
// while(i<=100){
//     console.log("Number"+ i);
//     i++;

// }

//do-while


// var i =20;
// do{
//  console.log("Number"+ i);
//  i++;

// }while(i<10);


// while(i<10){
//         console.log("Number"+ i);
//         i++;
    
//     }

    // for(var i =20; i< 10;i++){

    //     console.log("Number"+ i);
    // }



    // for in loop
 
//  var student = {
//         fName :"pavan",
//         lName : "kumar",
//         qual : "B.TECH",
//         age:22,

//  } 
 
//  for(var xcel in student){
//     console.log(student[xcel]);
//  }

//for of

// var xcel = [10,20,30,40,50,60,70];
// for(var data of xcel){
//     console.log(data);
// }




// Function 

// function sleppWell(){
//     console.log("SleepWell");
// }

// sleppWell();

// function addTwoNumber(a,b){
//     var res = a*b;
//     console.log(res);
// }
// addTwoNumber(10,20);

// function giveTwoSumOfNumber(a,b){

// var res = a*b;
//     return res;
// }
// console.log(giveTwoSumOfNumber(5,5));

        //ANONOMOUS FUNCTIONS
// var sayHai = function(){
//     console.log("say hello");
// }
// sayHai();


// var haiEveryone = function(a,b){
//     var res = a+b;
//     console.log(res);
// }

// haiEveryone(30,80);

      //AROW FUNCTIONS


// var sayhi = () => {
//     console.log("hello");
// }
// sayhi();

// var sayhs = (d,g) => {
//     var res = d*g
//     console.log(res);
// }
// sayhs(30,90);

// var givesayher = (a,d,f) => {
// var res = a*d+f;
// return res;
    
// }
// console.log(givesayher(20,60,80));

// var sayho = () => {
//     console.log("pavan");
// }
// sayho();

// For each

// var arr = [10,20,30,40,50,60,70];

// var printEle = function(element){
//     console.log(element);
// }
// arr.forEach(printEle);


// arr.forEach((element) =>{
// console.log( "Element",element);
// }
// )

// arr.forEach(function(element){
//     console.log("fu",element);
// })


//MAPS


// var num = [1,2,3,4,5,6,7,8,9];

// var res = num.map((element) => {
//     return element * 2;

// })
// console.log("original", num);
// console.log("result", res);




// reduce 

// var arr = [10,20,30,40,50,60,70];
// var callBack = (prev,curr) =>{
//     return prev+curr;                      Arrow Function
// }
// var res = arr.reduce(callBack,10);
// console.log(res);


// function Haisiri (a,b){
//     return a+b;
// }                                           Function
// var res = arr.reduce(Haisiri,2);
// console.log(res);


                    // Sort Method


// var s = [10,50,60,40,90,70,80,5];
// console.log("original",s.sort());



// var str = ["virat","Yash","Bob","Mark","Joj","Sun","Rashit","Anikit"]
// console.log(str.sort());


// // var num = [10,50,60,40,90,70,80,5];
// var num = ["virat","Yash","Bob","Mark","Joj","Sun","Rashit","Anikit"];
// var num = num.sort((a,b) =>{

// return a-b;                              // ASC ORDER   a-b
// })
// console.log("ASC",num);                     



// // var num2 = [10,50,60,40,90,70,80,5];
// var num2 = ["virat","Yash","Dian","Mark","Joj","Sun","Rashit","Anikit"];
// var num2 = num2.sort((a,b)=>{
// return b-a;                             // Desc order  b-a

// })
// console.log("DESC",num2);



// FILTER()

//  var num2 = [10,20,30,40,30,50,20,20,20,50];
// var res = num2.filter((ele)=>{
// return ele > 20;

// })
// console.log(res); // [ 30, 40, 30, 50, 50 ]



// var sd = [20,30,40,50,20,30,40,50,20,30,40,50,20,30,40,50,20,30,40,50,20,30,40,50,90,150]
// var res1 = sd.filter((elem)=>{
// //return elem < 90; 
//  /* 20, 30, 40, 50, 20, 30, 40, 50,
// 20, 30, 40, 50, 20, 30, 40, 50,
// 20, 30, 40, 50, 20, 30, 40, 50 */


// return elem > 90;//[ 150 ]
// })
// console.log(res1);




// Exceptions


// try {
//  var num = 20;
//  var firstName = "Ramesh";
// console.log("NUMBER",num);
// console.log("fName",firstName);

// } catch (error) {
//     console.log("Error is Occured");
    
// }finally{
//     console.log("Finally Executed");  
// }



// MANUALLY EXCEPTION

// try{
//  var num = 80;
// var fName = "pavan";
// throw new Error("Product is not Found");
// }catch(error){
// console.log(error);
// }finally{
//     console.log("Finally executed");
// }
















































































































































































































































































































    















































































































