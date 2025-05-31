
// let n = 2; 

// for(let i=0; i<n; i++) {
//   console.log(i); 
// }

// console.log("hello gautam")

let args = process.argv; 
for(let i=2; i<args.length; i++) {
  console.log("hello to", args[i])
}
 