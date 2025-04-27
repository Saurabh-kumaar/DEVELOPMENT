
      // Practice Question 
    // Qs 1:- 

// function printpoem() {
//   console.log("Twinkle Twinkle, little star"); 
//   console.log("how i wonder what you are"); 

// }

// printpoem();   
// ---------------

// function findrandom() {
//   let dice = Math.floor(Math.random() * 6 )+1; 
//   console.log(dice); 
// } 

// findrandom(); 
// findrandom(); 
// findrandom(); 
// findrandom(); 
// --------------------------- 

// create a function that gives us the average of 3 numbers. 

// function average() { 
//    let avg = (3 + 4 + 3 ) / 3; 
//   console.log(avg); 
// }
// average(); 

// 2nd way :- 

// function calcAvg(a,b,c) {
//   let avg = (a+b+c)/3; 
//   console.log(avg); 
// }

// calcAvg(2,4,6); 


// ------------------------------ 

// create a table for any number 
 

// function table(n){
//   for(let i=n; i<=n*10; i+=n){ 
//     console.log(i); 
//   }
// }

// table(4); 

// ------------------------------- 

// Create a function that returns the sum of num from 1 to n 

// function sum(n) { 
//   let sum = 0; 
//   for(let i=1; i<=n; i++){ 
//     sum += i; 
//    } 
//    return sum; 
// }

//  ------------------------------- 

// create a function that returns the concatenation of all string in a Array.  


// let str = ["my", "name", "is", "devil"];

// function concat(str){
//   let result = "";

//   for(let i=0; i<str.length; i++){
//     result += str[i]; 
//   }

//   return result; 
// }

// ------------------------------------ 

// what will be the output of this code ...



let greet = "hello"; 

function changeGreet() {
  let greet = "namaste"; 
  console.log(greet); 
  function innerGreet(){
    console.log(greet); 
  }
}kafj 
 
console.log(greet); 
changeGreet(); 
 









