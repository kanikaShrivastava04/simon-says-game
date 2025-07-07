 /*{//block scope
    let x = 3;

}
console.log(x);*/

//Local scope 
/*let car = "BMW"; //Global variable
function myFunction(){
    let carName = "volvo";
    console.log(carName);
}
 //console.log(carName);
 myFunction();*/ 
  

 //Part 2 is Function in javascript
 function myfunction(p1 , p2){
    return p1*p2; 
    //console.log("hii");
 }
 console.log(myfunction(3,4)); 

 function toCelsius(fahrenheit){
    return(5/9)*(fahrenheit-32);
 }
 let value = toCelsius(77);
 console.log(value);