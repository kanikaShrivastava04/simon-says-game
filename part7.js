/*let Student = {
    name:"kanika",
    age:21, 
    eng:89,
    math:91,
    phy:98,

    getAvg(){ 

        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg); 
        console.log(`${this.name} got avg marks= ${avg}`)
    }
    
}*/ 
/*const person={
    firstName:"john",
    lastName:"Deo",
    id:3344, 

    fullName:function(){ 
        console.log(this);
        return this.firstName+" "+this.lastName;
    } 
    
}
function Myfunction(){
        return this;
    }
    console.log(Myfunction());*/ 

    //try....catch block 
   //example:1
    /*try{
        let x = 5;
        let result = x+10; 
        console.log(result);
    }
    catch(error){
        console.log("Error:" ,error.message);

    }*/ 

       /* try{
            let fruits = ["apple","banana"];
            console.log(fruits[5].toUpperCase());
        }
        catch(error){
            console.log("Array Error:",error.message);
        } 

        try {
  console.log("Trying something...");
  throw new Error("Oops!");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Finally block always runs.");
}
*/ 
//Arrow function
const add = (a,b)=> a+b;
//one line function
const square = (x)=> x*x;
console.log(square(4)); 
//No parameters:
const greet =()=>console.log("Hello!");
greet();

//Multiple lines 
const multiply = (a,b)=>{
    let result = a*b;
    return result;
};
console.log(multiply(3,4)); 

const person={
    name:"kanika",
    sayName:function(){
        console.log(this.name);
    },
    sayNameArrow:() => {
        console.log(this.name);
    }
};
   //  person.sayName();
   person.sayNameArrow(); 

   //setTimeout() 
   //Exa1: 
   setTimeout(()=>{
    console.log("Hello after 2 seconds");
   } , 2000
);
//ex:2 , with a named function 

function pranam(){
    console.log("welcome, kanika!");
}
setTimeout(pranam, 3000); 

//ex3: see the difference in timing 
console.log("start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 4000);


console.log("End"); 


//setInterval() 
/*setInterval(() => {
console.log("Hello kanika");
}, 2000
);
clearInterval();*/  

let count = 0;
 const timer = setInterval(() => {
    count++; 
    console.log("Count:" , count);

    if(count === 5){
        clearInterval(timer);
        console.log("Stopped");
    }
 },1000);
