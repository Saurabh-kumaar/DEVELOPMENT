
            // forEach 

// let arr = [1,2,3,4,5,6]; 
// // 1st 
// arr.forEach((el) => {
//     console.log(el); 
// }); 

// // 2nd
// arr.forEach(function(el) {
//     console.log(el); 
// }); 
 
// 3rd 
// let print = function(el) {
//     console.log(el); 
// }; 
// arr.forEach(print); 

// ---------------------------- 

// let arr = [
//     {
//         name: "mohit", 
//         marks: 60,
//     },
//     {
//         name: "Avinash", 
//         marks: 90, 
//     },
//     {
//         name: "Rinchu", 
//         marks: 93, 
//     }
// ];  

// arr.forEach((student) => {
//     console.log(student.name); 
// }); 

// ------------------------------------------- 

                    // Map  

// let num = [1,2,3,4]; 
// let double = num.map((el) => {
//     return el * 10; 
// }); 

// ------------------------------------------- 

                // Filter  find odd and even 

// let nums = [1, 2, 3, 4, 7, 8, 2, 6, 9]; 
// let ans = nums.filter((el) => {
//     return el % 2 != 0;  // find from here odd or even 
// }); 

// ------------------------------------------------ 

                // Every 
// let arr = [2,4,6]; 
// let ans = arr.every((el) => {
//     return el % 2 == 0; 
// })
  
// -------------------------------------------------

                // Reduce 

// let nums = [1, 2, 3, 4]; 
// let finalVal = nums.reduce((res, el) => { 
//     // console.log(res); 
//     return res + el
// }); 
// console.log(finalVal); 

// ------------------------------------------------- 

            // find max value in an array 

// let arr = [1,3,4,2,5,6,7,8,23,32,13]; 

// 1st method:- 

// let max = -1; 
// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i]; 
//     }
// }
// console.log(max); 
// ----------------- 

// 2nd method :-

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el; 
//     } else { 
//         return max; 
//     }
// }); 
// console.log(max); 

// --------------------------------------------

                // Default  Parameters 

// function sum(a, b=4) { 
//     return a+b; 
// }
// sum(3,5); 

// --------------------------------------------- 

            // Spread 

//  let arr = [1, 2, 3, 4, 5]; 
//  let newArr = [...arr]; 


// let chars = [..."heyEveryone"]; 

// let odd = [1, 3, 5, 7, 9]; 
// let even = [2, 4, 6 ,8, 10]; 

// let nums = [...odd, ...even];  // both will add 

// ------------------------------------------------- 


// const data = {
//     email: "devil06@gmail.com",
//     password: "abcde",
// }; 

// const datalist = {...data, id:123, country:"india" }; 

// // ------ 

// let arr = [2, 3, 5, 6, 7]; 
// let obj1 = {...arr}; 
// let obj2 = {..."hello"}; 
 

// ---------------------------------------------- 

            // Rest 

// function sum(...args) {
//     // arguments 
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us: ", args[i]); 
//     }
// }

// function min() {
//     console.log(arguments.length); 
// } 

// -------- 
// sum :-
// function sum(...args) {
//     return args.reduce((sum, el) => sum + el); 
// } 
// ----- 

// min :- 
// function min(msg, ...args) { 
//     console.log(msg); 
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el; 
//         } else {
//             return min; 
//         }
//     })
// }

// -------------------------------------------------- 

                // Destructuring // add break, indivisual print. 

// let names = ["tony", "rahul", "raju", "devil", "xyz"]; 

// let [winner, runnerup, secondRunnerup, ...others] = names; 

// objects :- 

// const Employee = {
//     name: "saurabh", 
//     age: 18, 
//     city: "Benguluru", 
//     Position: "SDE2", 
//     username: "saurabh123@gmail.com", 
//      password: "hello",
//     time: "23:4",
// };
 
// let {username:user , password:pass, } = Employee; 



// =============================================================================================================
 
    // Practices Questions :-  

// check if num is multiple of 10 or not 

// let nums = [10, 20, 30, 40]; 

// let ans = nums.every((el) => el % 10 == 0); 
// console.log(ans); 

// --------------------------------

// Create a function to find the min number in an array 

// let arr = [2, 3, -5, 5, 6, 8, 1, 9 ,10]; 
 
// let min = arr.reduce((min, el) => {
//     if(min <el) {
//         return min; 
//     } else { 
//         return el; 
//     }
// })
// console.log(min)


// ======================================================================================= 

                // Assignment-8  

// Qs 1:- square ans sum the array elements using the arrow function and then find the 
// average of the array .  
 
// let nums = [1, 2, 3, 4, 5];   

// const square = nums.map((num) => num * num); // map use square of each nums.
// console.log(square);         // then it - 1, 4, 9, 16, 25

// let sum = square.reduce((acc, cur) => acc + cur, 0);  // find total nums square then find avg them all. 
// let avg = sum / nums.length; 
// console.log(avg); 

// --------------------------------------------- 

// Qs 2:- 

// create a new array using the map function whose each element is equal to the 
// original element plus 5. 

// let nums = [1, 3, 5, 6, 7, -8];   
// let newNums = nums.map(num => num + 5); 
// console.log(newNums); 

// // console.log(nums.map((num) => num + 5)); 


// Qs 3:- 

// Creata a new array whose elements are in uppercase of words present in the original array. 


// let arr = ["adam", "bob", "catlyn", "donald"]; 
// console.log(arr.map((arr) => arr.toUpperCase())); 


// Qs 4:- 











































