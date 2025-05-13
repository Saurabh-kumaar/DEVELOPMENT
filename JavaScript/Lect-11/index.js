
    // call stack 


// function devil() {
//   console.log("hello"); 
// }

// function demo() {
//   devil(); 
// }

// demo(); 

// ----------------------------------- 

function hello() {
  console.log("inside hello fnx"); // 3
  console.log("hello");   // 4
}

function demo() {
  console.log("calling hello fnx");  // 2
  hello(); 
}

console.log("calling demo fnx");  // 1
demo(); 
console.log("done, bye!"); // 5









