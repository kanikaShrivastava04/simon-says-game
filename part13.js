//Example!:basic "async" function 
/*async function greet(){
    return "hello!";
}
greet().then(msg => console.log(msg));

//Example2: Using await inside async 
function wait(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done waiting");
        } , 2000);
    });
}
async function callWait(){
    console.log("Waiting...");
    const result = await wait();
    console.log(result);
}
callWait();  */

//Example3: Error Handling 

/*async function fetchData(){
    try{
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error occurred:" , error);
    }
}*/
/*function getNum(){
    return new Promise((resolve , reject) => { 
        setTimeout(()=>{
        let num = Math.floor(Math.random() * 10)+1;
        console.log(num);
        resolve();
        } , 1000);
       
    });
}
async function demo(){
    await getNum(); 
    await getNum();
    getNum();
} */

/*h1 = document.querySelector("h1");

function changeColor(color ,delay){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{ 
            let num = Math.floor(Math.random() *5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h1.style.color = color; 
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        } ,delay);
    })
} */
/*async function demo(){  
    //handeling rejetions in js
    try{
    await changeColor("red" , 1000);
    await changeColor("orange" , 1000);
    await changeColor("green" , 1000);
    changeColor("blue" , 1000);
    }catch(err){
        console.log("error caught"); 
        console.log(err);
    }
    let a = 5; 
    console.log(a); 
    console.log("new number = ", a+3);
}*/

//ACCESSING JSON DATA USING JSON.parse(jsonData);

/*let jsonData = '{"name": "Kanika", "age": 22,"skills": ["Java", "HTML", "CSS"]}';
//convert json string to js object 
let obj = JSON.parse(jsonData);
//Step 2: Access data using dot or bracket notation
console.log(obj.name);         
console.log(obj["age"]);      
console.log(obj.skills[0]);     

//IF JSON IS ALREADY AN OBJECT 
let data = {
  name: "Kanika",
  age: 22,
  skills: ["Java", "HTML", "CSS"]
};

console.log(data.name);       // Kanika
console.log(data.skills[2]);  // CSS
//PRACTICE TASK 
let student = {
  "name": "Kanika",
  "course": "B.Tech",
  "marks": {
    "math": 90,
    "english": 85
  }
};
console.log(student.name);
console.log(student.course);
console.log(student.marks.english); */

//Our First API request 
/*let url = "https://catfact.ninja/fact";
fetch(url) 
.then((response)=>{
    console.log(response);  
    return response.json();
   
})
.then((data) => {
console.log(data);
})
.catch((err) => {
console.log("ERROR-" , err);
});*/ 
/* Using Fetch with async-await 

let url = "https://catfact.ninja/fact"; 
async function getFacts(){
    let res = await fetch(url); 
    let data = await res.json();
    console.log(data.fact);
}*/ 

//Using Axios 
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);

    }catch(e){
        console.log("error - ", e);
    }
}