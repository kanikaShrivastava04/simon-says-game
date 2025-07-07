//call stack in js
/*function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}
function demo(){
    console.log("calling hello fnx");
    hello();
} 
console.log("calling demo fnx");
demo();
console.log("done, bye!");*/
 

//promises example 
/*function savetoDb(data , success, failure){
    let internetSpeed = Math.floor(Math.random() *10)+1;
    if(internetSpeed > 4){
       success();
    }
    else{
        failure();
    }

} */
//callback hell
/*savetoDb("apna collage" ,
() => {
    console.log(" success:your data was saved"); 
    savetoDb("hello world" , ()=>{
        console.log("success2:data2 saved");
    }, () => {
        console.log("failure2: weak connection");
    }
)
},
() => {
    console.log("weak connection. data not saved");
}

);*/
/*function savetoDb(data){
   //Promise:resolve & reject 
   return new Promise((resolve,reject)=>{
 let internetSpeed = Math.floor(Math.random() *10)+1; 
 if(internetSpeed > 4){
    resolve("success: data was saved");
 } else{
    reject("failure: weak connection");
 }
   })
}   

//.then()&.catch() , promises methods:
let request = savetoDb("apna college");
request.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise:",result);
    //console.log(request); 
    return savetoDb("helloworld");
})
.then((result) =>{
console.log("data2 saved");
 console.log(result);
return savetoDb("shradha");
}) 
.then((result) => {
    console.log("data3 saved");
     console.log(result);

})
.catch((error) =>{
    console.log("promise was rejected");
    console.log(error);
   // console.log(request);
});*/ 

