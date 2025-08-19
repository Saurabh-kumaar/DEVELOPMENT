const express = require("express"); 
const app = express(); 


// app.use((req, res,next) => {
//   console.log("Hi, I'm 1st middleware"); 
//   // res.send("now it is done"); 
//   next(); 
// });

// app.use((req, res, next) => {
//   console.log("Hii, I'm 2nd middleware");
//   next(); 
// }); 
 

const checkToken = (req, res, next) => {
  let { token } = req.query; 
  if (token === "giveaccess") {
    next(); 
  }
  res.send("ACCESS DENIED!")
}; 

app.get("/wrong", (req, res) => {
  abcd = abcd; 
})

app.get("/api", checkToken, (req, res) => {
  res.send("some data"); 
}); 


app.get("/", (req, res) => {
  res.send("Hi, I am root."); 
});  


app.get("/random", (req, res) => {
  res.send("this is a random page"); 
}); 

// logger - morgan 
// app.use((req, res, next) => {
//   req.time = Date.now(); 
//   console.log(req.method, req.hostname, req.path, req.time); 
//   next(); 
// });

// 404
app.use((req, res) => {
  res.send("Page Not Found"); 
}); 




app.listen(8080, () => {
  console.log("server listening to port 8080"); 
}); 



// ========================================================

// // ------- Here i created many middleware 

// // passport check
// app.use((req, res, next) => {
//   console.log("passport check 🛂")
//   next(); 
// })

// // laggage check
// app.use((req, res, next) => {
//   console.log("luggage check 🎒"); 
//   next(); 
// })

// // board pass check 
// app.use((req, res, next) => {
//   console.log("borading pass 🎫");
//   next();  
// }); 

// // final response 
// app.use((req, res, next) => {
//   //  res.send(" Welcome airindia ✈️"); 
//   console.log("heyy new here----------");
//    next(); 
// }); 

