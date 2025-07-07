function changeText(){
    let element = document.getElementById("heading");
    element.innerText = "You Clicked The Button!"; 
    
}
function updatePara(){
let El = document.getElementById("para");
    El.innerText = "JavaScript is Awesome!";
}

function changeBoxes(){
    let boxes = document.getElementsByClassName("box");

    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "orange";
        boxes[i].innerText = "Box Changed " + (i+1);
    }
} 

function changemsg(){
    let Message = document.getElementsByClassName("msg");
    for(i=0;i<Message.length;i++){
        Message[i].innerText = "Message read"+(i+1);
        Message[i].style.backgroundColor = "lightgray";
    }
} 
function changeParagraphs(){
    let paragraphs = document.getElementsByTagName("p");

    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].innerText = "This paragraph has been updated";
        paragraphs[i].style.color = "green";
    }
} 
function AnnClose(){
    let Announcement = document.getElementsByTagName("h2");

    for(let i=0;i<Announcement.length;i++){
        Announcement[i].innerText= "Announcement Closed";
        Announcement[i].style.color = "gold";
    }
} 

let x = document.querySelector(".info");
x.innerText = "Only the first is changed"; 

function changefirst(){
    let y = document.querySelector(".title");
    y.innerText = "Hello from JavaScript 👋"
} 
function highlightNotes() {
  let allNotes = document.querySelectorAll(".note");

  allNotes.forEach(function(note, index) {
    note.innerText = "Note " + (index + 1) + " - Highlighted!";
    note.style.backgroundColor = "lightgreen";
  });
}
/* example of InnerText
let p1 = document.getElementById("para1");
console.log(p1.innerText); // Output: Hello

/* example of InnerContent 
let p2 = document.getElementById("para2");
console.log(p2.textContent); 



/* example of HTML text
let p3 = document.getElementById("para3");
console.log(p3.innerHTML);
// Output: Hello <span style="display:none;">Kanika</span> */ 

/*function showText() {
      let el = document.getElementById("demo");

      console.log("innerText:", el.innerText);
      console.log("textContent:", el.textContent);
      console.log("innerHTML:", el.innerHTML);

      alert("Check the console (press F12) to see the difference.");
    } 

    //Manipulation Attribute 
    /*function changeImage(){
        let img = document.getElementById("myImg");
        img.setAttribute("src" , "Tree image.jpg");
        img.setAttribute("alt","Tree Image"); 

        let currentAlt = img.getAttribute("alt");
        console.log(currentAlt);
    } 


    //ClassList Methods Example 
    //Add a class 
   /* function addClass(){
        let para = document.getElementById("para"); 
        para.classList.add("highlight");

    }  
    //fault
    function toggleTheme() {
  document.body.classList.toggle("dark");
} 


//Exa 3: Check if a Class Exists 
/*function checkClass() {
  let box = document.getElementById("myBox");
  if (box.classList.contains("active")) {
    alert("Box has 'active' class.");
  } else {
    alert("Box does NOT have 'active' class.");
  }
}
//Example 4: Replace One Class with Another 
/*function switchTheme() {
  let box = document.getElementById("themeBox");
  box.classList.replace("light-theme", "dark-theme");
}
// DOM Navigation  
//1. parentElement  
/*window.onload = function(){
let child = document.getElementById("inner"); 
console.log("Child Element: ", child); 
console.log(child.parentElement); // <div id="outer">...</div>
};*/



 // Step 1: Create a new element
  let newPara = document.createElement("p");

  // Step 2: Add content
  newPara.textContent = "Hello! I am a new paragraph.";

  // Step 3: Add it to the page
  document.getElementById("myDiv").appendChild(newPara);

console.log(newPara.textContent);  // Output in console: Hello! I am a new paragraph. 
//console.log(document.getElementById("myDiv"));  // Shows the whole div

