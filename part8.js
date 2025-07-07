let fruits = ["apple" ,"banana" , "mango"]
fruits.forEach(function(fruit){
    console.log(fruit);
}); 

let colors = ["red","green" , "blue"];
colors.forEach(function(color ,index){
    console.log(index+":" +color);
});

/*let numbers = [1,2,3,4];
numbers.forEach((num)=>{
    console.log(num*2);
});*/  

//Map() method 
/*let numbers = [1,2,3,4];
 let doubled = numbers.map(function(num){
    return num*2;
 });
 console.log(doubled); 

 //filter() method
 let EvenNum = numbers.filter(function(num){
    return num%2 ===0;
 });
 console.log(EvenNum); 

 //Every() method 
 let ages  = [22,25,30,28];
let allAdults = ages.every(function(age){
return age >= 18;
}
);
console.log(allAdults);  
//using arrow function 
/*let Ages = [22,16,30]; 
let result = Ages.every(age => age>=18);
console.log(result);

//some() method 
let num = [1,3,5,8];
let hasEven = num.some(function(N){
    return N%2 === 0;
});
console.log(hasEven);*/ 

//learning reduce function 
/*let numbers = [1,2,3,4,5,6];
let sum = numbers.reduce(function(acc,curr){
    return acc+curr;
},0);

console.log(sum); 
//print product
let product = numbers.reduce(function(acc,curr){
    return acc*curr;
},1);
console.log(product); 
//find maximum
let max = numbers.reduce(function(acc,curr){
    return curr>acc? curr:acc;
});
console.log(max); 

//join all strings
let words = ["kanika" , "is", "learning","javascript"];
let sentance = words.reduce((acc,word) => acc +" "+word);
console.log(sentance);

//default parameters 
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();           // Output: Hello, Guest!
greet("Kanika");   // Output: Hello, Kanika!


function add(a = 5, b = 10) {
  return a + b;
}

console.log(add());        // Output: 15
console.log(add(3));       // Output: 13
console.log(add(2, 3));    // Output: 5
 
//spread with Arrays 
//Combine Arrays 
let arr1 = [1,2];
let arr2 = [3,4];

let combined = [...arr1,...arr2];
console.log(combined);

//copy an Array 
let original = [10, 20, 30];
let copy = [...original];

console.log(copy); // [10, 20, 30]
 
//Spread with strings 
let word = "Hello";
let letters = [...word];

console.log(letters); // ['H', 'e', 'l', 'l', 'o']


//spread with Objects 
let user = { name: "Kanika", age: 22 };
let extra = { city: "Bhopal" };

let newUser = { ...user, ...extra };
console.log(newUser);

//function arguments with spread 
//you can use spread to pass an array as individual arguments 

function add(a, b, c) {
  return a + b + c;
}

let n = [1, 2, 3];
console.log(add(...n)); // Output: 6  
*/ 


// learning Rest here 
//basic example
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

//2.Rest with Array Destructuring 

/*let [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a);     // 1
console.log(b);     // 2
console.log(rest);  // [3, 4, 5]
 */
//3. Rest with Object Destructuring
let user = {
  name: "Kanika",
  age: 22,
  city: "Bhopal"
};

let { name, ...details } = user;

console.log(name);    // Kanika
console.log(details); // { age: 22, city: "Bhopal" }

//Destructuring 

//1. Array Destructuring
let color = ["red", "green", "blue"];

let [first, second, third] = color;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue 

// Rest with Array Destructuring
let [x, ...rest] = [10, 20, 30, 40];
console.log(x);    // 10
console.log(rest); // [20, 30, 40]

//2. Object Destructuring
let User = {
  Name: "Kanika",
  age: 22,
  city: "Bhopal"
};

let { Name, age } = User;

console.log(Name); // Kanika
console.log(age);  // 22


