
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

// let greet = "hello"; 

// function changeGreet() {
//   let greet = "namaste"; 
//   console.log(greet); 
//   function innerGreet(){
//     console.log(greet); 
//   }
// }

// console.log(greet); 
// changeGreet(); 
 
// ========================================================== 
// ==========================================================

// Qs 1:- 

// write a javaScript function that returns array elements larger
//  than a Number. 

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]; 
// let num = 5; 

// function getElements(arr, num) {
//   for(let i=0; i< arr.length; i++) {
//     if(arr[i] > num) {
//       console.log(arr[i]); 
//     }
//   }
// }
// getElements(arr, num); 

// ------------------------------------------------------- 

// Qs 4:-

    // Write a javaScript function to count the number of vowels in a string argument. 

    let str = "apnacollege ka development"

    function countVowels(str) {
      let count = 0; 
      for(let i=0; i<str.length; i++) {
        if ( 
          str.charAt(i) == "a" || 
          str.charAt(i) == "e" || 
          str.charAt(i) == "i" || 
          str.charAt(i) == "o" || 
          str.charAt(i) == "u"
        ) { 
          count++; 
        }
      }
      return count; 
    }

    console.log(countVowels(str));



































