//Creat an object 
/*const person = {
    firstName:"kanika",
    lastname: "shrivastava",
    age:21,
    eyeColor:"blue"
}; 
//try to create a copy
const x = person;

x.age = 10;
//Accessing JavaScript Properties 
let age = person[x];
console.log(person.firstName + " "+ "is"+" "+  person.age+" "+  "year old.");
//we can add new properties like this
person.nationality = "indian";

//Deletin Properties
//delete person.age;

//nested Objects

myObj = {
    name :"john",
    age: 30,

    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3: "Fiat",
    }
} 
*/ 

//Activity: Guessing Game 
/*const max = prompt("enter the max number");

const random = Math.floor(Math.random() *max)+1;
//console.log(random); 
let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!");
        break;
    } 
    else if(guess < random){
        guess = prompt("your guess was too small,pls enter again...");
    }
    else{
        guess = prompt("your guess was large.please enter again...");
    }
}*/ 

//Practice Questions 
/*let CreatN = prompt("Roll the dice..");
let randomN = Math.floor(Math.random()*CreatN)+1;
console.log(randomN); */

const Car={
Name:"bmw",
Model:"2025",
color:"black"
};
const Person = {
    name:"kanika",
    age:23,
    city:"bhopal",

}
Person.city="new york";
Person.country="United States";