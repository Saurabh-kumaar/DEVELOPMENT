

            // mouse pointer 

// // let btn = document.querySelector("button"); // for single buttom
// let btns = document.querySelectorAll("button"); 

// for(btn of btns) {
//   btn.onclick = sayHello;  
//   btn.onmouseenter = function () {
//     console.log("you entered a button"); // its only for cursor on botton not tap 
//   }
//   console.dir(btn); 
// }
// //  +
// function sayHello() {
//   alert("hello ji"); // when we tap then print. 
// }
 
 
// ------------------------------------- 

          // Event listeners 

// let btns = document.querySelectorAll("button"); 

// for(btn of btns) {
//   // btn.onclick = sayHello; 

//   //  btn.addEventListener("click", sayHello); 
//   //  btn.addEventListener("click", sayName); 
//    btn.addEventListener("dblclick", function () {
//     console.log("you did double click")
//    }); 
//  }

// function sayHello() {
//   alert("hello!"); 
// }
 
// function sayName() { 
//   alert("kya haal hai ji"); 
// }

// ===============================================

        // Activity  

// let btn = document.querySelector("button"); 

// btn.addEventListener("click", function () { 
//         let h3 = document.querySelector("h3"); 
//         let randomColor = getRandomColor(); 
//         h3.innerText = randomColor;  

//         let div = document.querySelector("div"); 
//         div.style.backgroundColor = randomColor; 

//         console.log("color updated"); 
// }); 

// function getRandomColor() {
//         let red = Math.floor(Math.random() * 255); 
//         let green = Math.floor(Math.random() * 255); 
//         let blue = Math.floor(Math.random() * 255); 

//         let color = `rgb(${red}, ${green}, ${blue})`;
//         return color;  
// }

// ================================================== 

                // addEventListener 
                 
// let p = document.querySelector("p"); 

// p.addEventListener("click", function () {
//         console.log("parah was clicked"); 
// })
// // --- 

// let div = document.querySelector(".box");   
// div.addEventListener("mouseenter", function() {
//         console.log("para was clicked"); 
// })

// ------ 

// let btn = document.querySelector("button"); 
// let p = document.querySelector("p"); 
// let h1 = document.querySelector("h1"); 
// let h3 = document.querySelector("h3 "); 

// function changeColor() {
//         console.dir(this.innerText); 
//         this.style.background = "red"; 
// }
 
// btn.addEventListener("click", changeColor); 
// p.addEventListener("click", changeColor); 
// h1.addEventListener("click", changeColor); 
// h3.addEventListener("click", changeColor); 

// button 
// btn.addEventListener("click", function() {
//         // console.log(this);
//         // console.dir(this); 
//         console.dir(this.innerText); 
// })
 
// ----------
                // Keywords events 

// let btn = document.querySelector("button"); 

// btn.addEventListener("click", function (event) {
//         console.log(event); 
//         console.log("button clicked");  

// });
// ---
// btn.addEventListener("dblclick", function (event) { 
//           console.log(event); 
//         console.log("button clicked"); 
// }); 
// ---------------------- 

                // Keyword Events concept :- 


// let inp = document.querySelector("input"); 

// inp.addEventListener("keydown", function (event) {
//         console.log("code = ", event.code);  // ArrowUp, ArrowDown, ArrowLeft, ArrowRight  
//         if(event.code == "KeyU") {
//                 console.log("character moves forward"); 
//         } else if (event.code == "KeyD"){
//                 console.log("character moves backward"); 
//         } else if (event.code == "KeyL") {
//                 console.log("character moves Left"); 
//         } else if (event.code == "KeyR") {
//                 console.log("character moves right!"); 
//         }   
//  });
//  ----------------------- 

        // Form events

// let form = document.querySelector("form"); 

// form.addEventListener("submit", function (event) {
//          event.preventDefault();
//          console.dir(form); 
//         // alert("form submitted");  
//         // let inp = document.querySelector("input");  

//         // console.log(inp); 
//         // console.dir(inp); 
//         // console.log(inp.value); 

//         // let user = document.querySelector("#user"); 
//         // let pass = document.querySelector("#pass"); 

//         // console.log("user name = " + user.value); 
//         // console.log("user pass = " + pass.value);

//         // -----------

//         let user = this.elements[0]; 
//         let pass = this.elements[1]; 

//         console.log(user.value); 
//         console.log(pass.value);  

//         alert(`Hii ${user.value}, your password is set to ${pass.value}`); 
// }); 

// ----------------------------------------------------- 

                        // more events :- 
        
// let form = document.querySelector("form"); 

// form.addEventListener("submit", function (event) {
//         event.preventDefault(); 
// }); 

// let user = document.querySelector("#user"); 

// user.addEventListener("change", function () {
//         console.log("changed event"); 
//         console.log("final value =", this.value); 
// }); 

// user.addEventListener("input", function () {
//         console.log("input event"); 
//         console.log("final value =", this.value); 
// }); 



// =================================================================================================== 
// ===================================================================================================

                // Assignment Questions :- 
 

// let box = document.querySelector("#box");
//         box.addEventListener("mouseout", function () {
//             console.log("Mouse left the box");
//         });
 
//          document.addEventListener("keypress", function (event) {
//                 console.log("Key pressed: " + event.key);
//             });

//         document.addEventListener("Scroll", function () {
//                 console.log("key was scrolled"); 
//         });

//         document.addEventListener("load", function()  {
//                 console.log("page fully loaded"); 
//         });

// ------------------------------------------------------------------



let btn = document.createElement("button");
btn.textContent = "click me!"; 
btn.style.padding = "10px 20px"; 
btn.style.fontSize = "16px";


document.body.appendChild(btn); 

btn.addEventListener("click", function () {
        btn.style.backgroundColor = "green"; 
});










 











