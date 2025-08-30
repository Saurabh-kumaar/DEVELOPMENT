const express = require("express"); 
const app = express(); 
const ExpressError = require("./ExpressError"); 


const checkToken = (req, res, next) => {
  let { token } = req.query; 
  if (token === "giveaccess") {
    next(); 
  }
  throw new ExpressError(401, "ACCESS DENIED!");
}; 

app.get("/api", checkToken, (req, res) => {
  res.send("data"); 
});

// app.get("/random", (req, res) => {
//   res.send("this is a random page"); 
// }); 


app.get("/err", ( req, res) => {
  abcd = abcd;
});  

// Create an admin route & an error with a 403 status code.  
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden"); 
}); 

app.get("/kalua", (req, res) => {
  throw new ExpressError(509, "this is new route & an erroe"); 
}); 
// =============================================================



// error handling --------------
app.use((err, req, res, next) => {
  let { status=500, message ="Some Erro Occurred" } = err; 
  res.status(status).send(message);
 }); 

 
 


// app.use((req, res) => {
//   res.status(404).send("Page Not Found!"); 
// }); 



app.listen(8080, () => {
  console.log("server listening to port 8080"); 
})



