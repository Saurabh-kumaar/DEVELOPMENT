
// let smallImages = document.getElementsByClassName("oldImg"); 

// for(let i=0; i < smallImages.length; i++) {
//   smallImages[i].src = "spiderman_img.png"; 
//   console.log(`value of image no. ${i} is changed.`); 
// }

// ---------------------------- 

// console.dir(document.querySelector("h1")); 

// console.dir(document.querySelector("#description")); 

// console.dir(document.querySelector(".oldImg")); 

// for choose anker tag 
// console.dir(document.querySelector("div a")); 

// ---------------------------------- 
// for all html collections 
// console.dir(document.querySelectorAll("div a")); 

// ------------------------------------
 
// let links = document.querySelectorAll(".box a"); 

// for(link of links) {
//   link.style.color = "green";  // inline
// }
  
// for(let i=0; i<links.length; i++) {
//   links[i].style.color = "brown"; 
// }
 

// ======================================================= 
// ======================================================= 

// Manipulating style :- 

// classList.add() to add new classes 
// classList.remove() to remove classes 
// classList.contains() to check if class exists 
// classList.toggle() to toggle between add & remove 

// ======================================================= 
// =======================================================  

// Adding Elements :- 

// appendChild(element) add in last 
// append(element) add any text
// prepend(element)  add in first 
// insertAdjacent(where, element) 



// ======================================================= 
// ======================================================= 


    // Practice Questions :-  

// (I) :-

let para1 = document.createElement("p"); 
para1.innerText = "Hey I'm red! "; 
document.querySelector('body').append(para1);  

para1.classList.add('red'); 
     
// (ii):- 

let h3 = document.createElement('h3'); 
h3.innerText = "Im a blue h3"; 
document.querySelector('body').append(h3); 
h3.classList.add('blue'); 

// (iii):- 

let div = document.createElement("div"); 
let h1 = document.createElement("h1"); 
let para3 = document.createElement("p"); 

h1.innerText = "I'm in a div"; 
para3.innerText = "ME TOO!"; 

div.append(h1); 
div.append(para3); 
div.classList.add("box"); 
document.querySelector("body").append(div); 







// ======================================================= 
// ======================================================= 
 

          // Assignment Questions :- 

// Qs 1: -

// let buttom = document.createElement('button');  
// let input = document.createElement('input'); 
// buttom.innerText = "Click me!"; 
 
// document.querySelector("body").append(input); 
// document.querySelector("body").append(buttom);  

// // Qs 2:- 

// buttom.setAttribute("id", "btn"); 
// input.setAttribute("placeholder", "username"); 

// // Qs 3:- 
// let btn = document.querySelector("#btn"); 
// btn.classList.add("btnstyle");  

// // Qs 4:- 

// let h1 = document.createElement("h1"); 
// h1.innerHTML = "<u>DOM Practice</u>";  
// document.querySelector("body").append(h1); 
 
// // Qs 5:- 

// let p = document.createElement('p'); 
// p.innerHTML = "Apna College <b>Sigma</b> Practice";  
// document.querySelector("body").append(p); 























