
        // async 

// async function greet() {
//   throw "404 not found"
//   return "hello"; 
// }
 
// greet() 
//   .then((result) => {
//     console.log("promise was resolved"); 
//     console.log("result was : ",  result); 
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err :", err);
//   });

// let demo = async () => {
//   return 10; 
// } 

                // await keyword 

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1; 
//       console.log(num); 
//       resolve(); 
//     }, 1000); 
//   }); 
// } 

// async function demo() {
//   await getNum(); 
//   await getNum(); 
//   getNum(); 
// }


// --------------------- 

// change color with the help of async and await function 

// h1 = document.querySelector("h1"); 

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { 
//       let num = Math.floor(Math.random() * 5) +1; 
//       if(num > 3) {
//         reject("promise rejected"); 
//       } 

//       h1.style.color = color; 
//       console.log(`color changed to ${color}!`); 
//       resolve("color changed!"); 
//     } , delay); 
//   }); 
// }

// async function demo() {   // handling rajection 
//   try { 
//     await changeColor("red", 1000);
//     await changeColor("pink", 2000);  
//     await changeColor("green", 3000); 
//     await changeColor("orange", 4000); 
//     await changeColor("blue", 5000); 
//   } catch (err) {
//     console.log("error caught"); 
//     console.log(err); 
//   }
// }adf 
  
// --------------------------------------------------------------

                // Accesing JSON data :- 


// let jsoRes = '{"fact":"People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.","length":165}';
// let validRes = JSON.parse(jsoRes); 
// console.log(validRes); 

// let student = {
//         age: 34, 
//         name: "devil"
// };

// ------------------------


let url = "https://catfact.ninja/fact"; 
 
fetch(url); 


ajk 








