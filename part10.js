let btn=document.querySelector("button");
console.dir(btn);
btn.onclick = function(){
    alert("button was clicked");
} 
/*Example2: dblClick */
const box = document.getElementById("colorbox");

box.addEventListener("dblclick" , function(){
    box.style.backgroundColor = "purple";
}); 

const input = document.getElementById("myInput");

input.addEventListener("focus",function(){
input.style.border = "2px solid blue";
});
 input.addEventListener("blur", function () {
    input.style.border = "2px solid red";
  }); 


  //mouse events example
const card = document.getElementById("card");
const cardText = document.getElementById("cardText");
//const input = document.getElementById("textInput");
const button = document.getElementById("changeTextBtn");

// 1. Mouse hover: change background color
card.addEventListener("mouseover", function () {
  card.style.backgroundColor = "orange";
});

card.addEventListener("mouseout", function () {
  card.style.backgroundColor = "lightblue";
});

// 2. Double click: increase card size
card.addEventListener("dblclick", function () {
  card.style.width = "300px";
  card.style.height = "200px";
  card.style.lineHeight = "200px";
});

// 3. Button click: change text to "You clicked the button!"
button.addEventListener("click", function () {
  cardText.innerText = "You clicked the button!";
});

//"this" in event listener
 const Btn = document.getElementById("btn1");

  Btn.addEventListener("click", function () {
    this.style.backgroundColor = "green";  // 'this' = btn
  });
 
  /*Keyboard event listener */ 
   let input1 = document.getElementById("keyDownInput");
  input1.addEventListener("keydown", function (event) {
    console.log("Key down: " + event.key); 
    /*event.key tell you that which key is pressed(like:"a",or "Enter") */
  }); 

  let input2 = document.getElementById("keyUpInput");

  input2.addEventListener("keyup", function (event) {
    console.log("Key up: " + event.key);
  });

  /* form event listeners*/ 
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops page from reloading
    alert("Form submitted!");
  });


  /*Extracting Form Data 
  1: using .value */  
  /*document.getElementById("myform").addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log("name:",name);
    console.log("Email:",email);
  });*/
  /*Ex2: Using FormData Objext  
  Simpler and Dynamic way to extract all form fields: */ 
  document.getElementById("myform").addEventListener("submit", function(event) {
  event.preventDefault();

  let formData = new FormData(this);  // "this" refers to the form element

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
}); 

/*Example: Change event on Input */ 
document.getElementById("nameInput").addEventListener("change", function() {
    alert("Value changed to: " + this.value);
  }); 

  /*Example: input Event */
  document.getElementById("username").addEventListener("input", function() {
    document.getElementById("output").textContent = "You typed: " + this.value;
  });

