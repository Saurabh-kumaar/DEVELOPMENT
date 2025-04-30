
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

 let arr = [1, 2, 3, 4, 5]; 
 let newArr = [...arr]; 


let chars = [..."heyEveryone"]; 
















// ==================================================================================== 

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



