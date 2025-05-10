
              // stop bubbling :- 

// let div = document.querySelector("div"); 
// let ul = document.querySelector("ul"); 
// let lis = document.querySelectorAll("li"); 

// div.addEventListener("click", function() {
//   console.log("div was clicked"); 
// }); 

// ul.addEventListener("click", function(event) {
//  // event.stopPropagation();  // it is use for stop the parents print
//    console.log("ul was clicked"); 
// });

// for(li of lis){
//   li.addEventListener("click", function (event) { 
//   //   event.stopPropagation(); 
//     console.log("li was clicked"); 
//   });
// }
 
// ==================================================================== 

let btn = document.querySelector("button"); 
let ul = document.querySelector("ul"); 
let inp = document.querySelector("input"); 


btn.addEventListener("click", function () { 
  let item = document.createElement("li");  // for add task 
  item.innerText = inp.value;  

  // for delete button show
  let delBtn = document.createElement("button"); 
  delBtn.innerText = "delete"; 
  delBtn.classList.add("delete"); 

  item.appendChild(delBtn); 
  ul.appendChild(item); 
   inp.value = "";       // delete after input
}); 


ul.addEventListener("click", function (event) {
  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement; 
    listItem.remove(); 
    console.log("deleted")
  }
}); 

    
















