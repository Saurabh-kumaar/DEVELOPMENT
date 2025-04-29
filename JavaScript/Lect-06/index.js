
          // function 

// function hello() { 
//   console.log("hello bro kya hal hai");
// } 

// hello(); 
// hello();
// ----------- 

// function printno() { 
//   for(let i=1; i<=5; i++){
//     console.log(i); 
//   }
// }
// printno(); 

// ------------------ 

// function isAdult() {
//   let age = 50;
//   if(age > 18){
//     console.log("it is adult"); 
//   } else {
//     console.log("it is not adult"); 
//   }
// }

// isAdult();

// ----------------

        // function with arguments 

// function printInfo(name, age) {
//   console.log(`${name}'s"age is ${age}.`); 
// } 

// printInfo("rajat dalal", 23); 
// printInfo("rajat dalal"); 
// printInfo(23); 
// ------------

// function sum(a, b){
//   console.log(a*b); 
// }

// sum(1,2); 
// sum(4.5,9);

// ----------------------- 

      // Return keyword 

// function sum(a, b) {
//   console.log("hello"); 
//   console.log("hello"); 

//   return a+b; 
// }
//  console.log(sum(3,4)); 

// ------------------------------ 

      // what is scope 

// let sum  = 90;  // Global scope

// function calSum(a,b) {
//   let sum = a + b;    // function scope
//   console.log(sum); 
// }

// calSum(2,5);  
// console.log(sum); 
 
// -------------------------- 

      // Block scope 

// { 
//   let a = 4;  
//   // console.log(a); 
// }
// console.log(a); 
// ---------

// for(let i=1; i<=5; i++){
//   console.log(i);  // ----- it will work because of function
// }
// console.log(i)  // -------- it will not work

// ---------- 

// let age = 123; 
// if(age >= 18){ 
//   let str = "adult"; 
//    console.log(str); 
// }

// ----------------------------------- 

      // Laxical scope
      
// function outFun(){
//   let a = 4; 
//   let b = 2; 
//   function innerFuc(){ 
//     console.log(a);  
      
//   } 
//   innerFuc(); 
// }

// -------- 

// function bigFun() {
//   let x = 3; 
//   let y = 5; 
//   function smallFun(){ // ----- function scope
//     console.log(x); 
//     console.log(y); 
//   }
//   smallFun();  
//   console.log(x); 
// }


// ---------------------------------------- 

          // Function Expression :- 

//  let sum = function(a, b) {
//   return a+b; 
// }  

// -------------- 
 
// let hello = function() { 
//   console.log("hello"); 
// } 

// --------------- 

// let devil = function(){
//   console.log("kya hal hai"); 
// }

// ---------------------------------------- 

            // Higher order functions 

// function multipleGreet(func, n) {
  
//   for(let i=1; i<=n; i++){
//      func(); 
//   }
// }
 
// let greet = function() {
//   console.log("hello"); 
// }

// multipleGreet(greet, 13); 

// --------------------------------------------- 

            // Higher Order Functions 

// function oddOrEvenFactory(request) {
//   if(request == "odd") {
//     let odd = function(n) {
//       console.log(!(n%2 == 0)); 
//     }

//     return odd; 
//   } else if (request == "even") {
//     let even = function(n) {
//       console.log(n%2 == 0); 
//     } 
    
//     return even; 
//   } else {
//     console.log("wrong request"); 
//   }
// }

// let request = "odd"; 

// ------------------------------------------------- 


                // Methods  


// const calculator = {
//   num: 30,
  
//   add: function(a, b) {
//     return a+b; 
//   }, 

//   sub: function(a, b) {
//     return a-b;
//   }, 

//   mul: function(a, b) {
//     return a*b; 
//   }, 

    // div: function(a, b) {
    //   return a/b;
    // }
// };

// ------------------------------------- 




















