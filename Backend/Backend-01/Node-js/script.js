
// let n = 2; 

// for(let i=0; i<n; i++) {
//   console.log(i); 
// }

// console.log("hello gautam")

// let args = process.argv; 
// for(let i=2; i<args.length; i++) {
//   console.log("hello to", args[i])
// }

// console.log("hello ji"); 


// const Math = require("./Math"); 

// console.log(Math.sum(2,3))

// console.log(Math); 


// console.log("Script started");
// const someValue = require("./Math"); 
// console.log("Imported value:", someValue);

// const math = require("./Math");

// console.log(math.sum(2, 3)); // 5
// console.log(math.mul(2, 4)); // 8
// console.log(math.g);         // 9.8
// console.log(math.PI);        // 3.14

// -------------------------------------------- 
    // for export in directories 



// const info = require("./fruits"); 
// console.log(info); 


// it is for run text in terminal made by -- and // any name print 

// const figlet = require("figlet"); 

// figlet("Devil", function (err, data) {
//   if(err) {
//     console.log("something went wrong.."); 
//     console.dir(err); 
//     return; 
//   }
//   console.log(data); 
// });

// ---------------------------------------

// it is use for import Math.js works 

import { g, mul, sum, PI} from './Math.js';

import { generate } from "random-words";

// console.log(sum(1, 2)); 
// console.log("PI:", PI);
// console.log("mul:", mul(4, 2));
// console.log("Gravity:", g);  

console.log(generate()); 














