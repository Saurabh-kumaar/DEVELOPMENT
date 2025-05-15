
    // call stack 


// function devil() {
//   console.log("hello"); 
// }

// function demo() {
//   devil(); 
// }

// demo(); 

// ----------------------------------- 

              // JS is thread 


// function hello() {
//   console.log("inside hello fnx"); // 3
//   console.log("hello");   // 4
// }

// function demo() {
//   console.log("calling hello fnx");  // 2
//   hello(); 
// }

// console.log("calling demo fnx");  // 1
// demo(); 
// console.log("done, bye!"); // 5

// --------------------------------------- 

        // js in single threaded 

// let a = 23; 
// console.log(a); 
// let b = 12; 
// console.log(b); 
// console.log(a+b); 

// ----------------------------------------

          // js single threaded 

// setTimeout(() => {
//   console.log("apna college"); 
// }, 2000); 

// setTimeout(() => {
//   console.log("shardha maam"); 
// }, 1000);


// console.log("hello..............");

// ------------------------------------------
 
        // Callback Hell 

// h1 = document.querySelector("h1"); 

// // h1.style.color = "pink"; 

// function changeColor(color, delay, nextchangeColor) {
//   setTimeout(() => {   // it is change the color and do delay work 
//     h1.style.color = color;  
//     if(nextchangeColor) nextchangeColor(); 
//   }, delay); 
// }

// changeColor("red", 1000, () =>{
//   changeColor("brown", 2000, () =>{
//     changeColor("green", 5000); 
//   }); 
// }); 


// changeColor("pink", 3000); 
// changeColor("magenta", 5000); 

  
// 2nd method .callback :- 

// setTimeout(() => {
//   h1.style.color = "red"; 
// }, 1000); 

// setTimeout(() => {
//   h1.style.color = "yellow"; 
// }, 2000); 

// setTimeout(() => {
//   h1.style.color = "green"; 
// }, 5000); 


// ========================================================================= 

      // Setting up for Promises 


// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1; 
//   if(internetSpeed > 4) {  
//     success(); 
//    } else { 
//     failure(); 
//    }
// }

// savetoDb(
//   "hello brothers",
//   () => {
//     console.log("success : your data was saved");  
//     savetoDb
//       ("hello world",
//          () => {
//           console.log("success2 : data2 saved"); 

//         }, 
//         () => {
//           console.log("failure2 :  weak connection"); 
//         }
//       );
//     }, 
//     () => {
//       console.log("failure : weak connection, data not saved"); 
//   }
// ); 

// =============================================================================== 

          // Refactoring with Promises 
          

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random () * 10) + 1; 
    if(internetSpeed > 4) {
      resolve("success : data was saved "); 
    } else {
      reject("failure : weak connection")
    }
  });
}
 
// savetoDb("hello guys ");



























