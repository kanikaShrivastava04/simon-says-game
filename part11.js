/*let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("lis"); 

div.addEventListener("click",function(){
  console.log("div was clicked");
}) 
ul.addEventListener("click" , function(){
  console.log("ul was clicked");
})
for(li of lis){
  li.addEventListener("click",function(){
    console.log("li was clicked");
  })
}*/ 

let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("todoList");

// Add new todo item
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
});

// Use Event Delegation
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.style.textDecoration = "line-through";
    event.target.style.color = "gray";
  }
});
