
const express = require("express"); 
const app = express(); 

const port = 8080; 

app.use(express.static("public"));   
app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
  // res.send("this is home"); 
  res.render("home.ejs"); 
}); 

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
   res.render("rolldice.ejs", { diceVal }); 
});  


app.get("/ig/:username", (req, res) => { 
  // const followers = ["rohti", "bob", "vikash", "piyush"]; 
  let { username } = req.params;
  const instaData = require("./data.json"); 
  const data = instaData[username];
  // console.log(data); 
  if(data) {
      res.render("instagram.ejs", {data  });
  } else {
    res.render("error.ejs");
  }
  
  // res.render("instagram.ejs", { data : instaData});  
 });



app.listen(port, () => {
  console.log(`listening on port ${port}`); 
}); 



 







































































