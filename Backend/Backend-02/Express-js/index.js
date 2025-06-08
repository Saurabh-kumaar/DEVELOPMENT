
const express = require("express"); 
const app = express(); 

// console.dir(app); 

let port = 8080; 
app.listen(port, () => {
  console.log(`app is listening on port ${port}`); 
});

app.use((req, res) => {
  // console.log(req); 
  console.log("request received");
  // res.send({
  //   name: "apple", 
  //   color: "red",
  // });  
  let code = "<h1>Fruits</h1> <ul><li>apple</li><li>banana</li></ul>"; 
  res.send(code); 
});
 
app.get("/", (req, res) => {
  res.send("hello i am root new version"); 
})
 
app.get("/", (req, res) => {
  res.send("you contacted apple path "); 
})

app.get("/", (req, res) => {
  res.send("you contacted orange path"); 
}) 

app.get("/", (req, res) => {
  res.send("this path does not work "); 
}); 





















































