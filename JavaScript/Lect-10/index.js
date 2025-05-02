

// let btn = document.querySelector("button"); // for single buttom
let btns = document.querySelectorAll("button"); 

for(btn of btns) {
  btn.onclick = sayHello;  
  btn.onmouseenter = function () {
    console.log("you entered a button"); // its only for cursor on botton not tap 
  }
  console.dir(btn); 
}
//  +
function sayHello() {
  alert("hello ji"); // when we tap then print. 
}
 
 
























