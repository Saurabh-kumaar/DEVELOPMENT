
// console.log("hahahaha");

// console.log("huhuhuhu");



// odd 
// for(let i=1; i<=15; i=i+2){
//   console.log(i); 
// }



// even 
// for(let i=2; i<=10; i=i+2){
//   console.log(i); 
// } 

// backwords 

// for(let i=10; i>=2; i=i-2){
//   console.log(i); 
// } 
 
// find any num of table ------

// let n = prompt("write your number");  
// n = parseInt(n); 

// for(let i=n; i<=n*10; i=i+n){
//   console.log(i); 
// }

// ---- 
 
// 5 table 
// for(let i=0; i<=50; i=i+5){
//   console.log(i); 
// }
 
// ------ 

// nestes looop 

// for(let i=1; i<=3; i++){
//   console.log(`root loop ${i}`); 
//   for(let j=1; j<=3; j++){
//     console.log(j); 
//   } 
// }

// ------------

// while loop  -------- 

// let i=0; 
// while(i<=20){
//   console.log(i); 
//   i++; 
// }

// --- 

// let i=5; 
// while(i>=1){
//   console.log(i); 
//   i--; 
// }

// even 
// let i=2; 
// while(i<=15){
//   console.log(i); 
//   i = i+2; 
// }

// ------------------------------- 
 
// const favMovie = "avatar"; 

// let guess = prompt("guess my fav movie"); 
// while( (guess != favMovie) && (guess != "quit")) {
//    guess = prompt("please try again"); 
// }

// if(guess == favMovie) {
//   console.log("congrats you did ava!!"); 
// } else {
//   console.log("you can quit"); 
// }

// ---------------------------- 

  // break - keyword 

// let i=1; 
// while(i<=5){ 
//   if(i == 3){  // for break in between
//     break;
//   }
//   console.log(i); 
//   i++; 
// }  

// ------------------------------ 

// Loops with Arrays :- 

// let fruits = ["kela", "sev", "aam", "amrud", "angur"]; 
// fruits.push("pineapple");  
// for(let i=0; i<fruits.length; i++){
//   console.log(i,fruits[i]);  

// }

// ---------------------------------------
 
// Nested loop with nested arrays :- 



// let players = [ [ "Hardik", "Rohit", "chokali"], ["Head", "smith","krishgell"]]; 

// for(let i=0; i<players.length; i++){
//   console.log(i,players[i], players[i].length); 
//   for(let j=0; j<players[i].length; j++){
//     console.log(`j=${j}, ${players[i][j]}`); 
//   }
// }
 

// ------ 

// let game = [["cricket","chess","football"],["bollyball","kabbadi","kho-kho"]]; 

// for(let i=0; i<game.length; i++){
//   console.log(i,game[i],game[i].length); 
//   for(let j=0; j<game[i].length; j++){
//     console.log(`j=${j}, ${game[i][j]}`);
//   }
// }
 
// ---------- 

// let state = [["bihar","chandigarh","up"],["uttrakhand","punjab","sikkim"]]; 

// console.log(state[0][0]);  
// console.log(state[0][1]);  
// console.log(state[0][2]);  
// console.log(state[1][0]);  
// console.log(state[1][1]);  
// console.log(state[1][2]);   

// console.log(state[0]); 
// console.log(state[1]);  


// ----- 

// let results = [["rinchu",99], ["mohit",99.9],["gautam",90]];  
// console.log(results[2][0]); 
 
// ------ 

// let food = [["litti",30],["chokha",20],["puri",12],["sbji",10],["dal",9],["chaval",13]];  

// for(let i=0; i<food.length; i++){ 
//   for(let j=0; j<food[i].length; j++){
//     // console.log(food[i][j]);   
//     console.log(food[3][1])
//   }
// }
 
// ------- 
// ----------- for of loop --------------- 


// let fruits = [ "mango", "banana", "apple", "grapes"]; 

// for(fruit of fruits) {
//   console.log(fruit); 
// }

// ------- 

// let players = ["pandya", "chokali","raina","gambhir","dhoni"]; 

// for(i of players) {
//   console.log(i); 
// }
 

// --------  nested for-of loop ------------- 

// let coding = [[ "java", "python", "c", "c++"],[ "dev", "dsa" , "golang"]]; 

// for(lang of coding){
//   for(master of lang){
//     console.log(master); 

//   }
// }

// -------- 

// let principal = [["english", "math", "compluter", "development"], ["dsa", "ms.in tech","full stack"]]; 

// for(masters of principal) {
//   for(students of masters){
//     console.log(students,students.length); 
//   }
// }

let num = [1,2,3,4,5,6,2,3]; 
console.log(num.slice[1]); 
































































