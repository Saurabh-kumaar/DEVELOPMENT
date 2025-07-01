const express = require("express"); 
const app = express(); 
const port = 8080; 
const path = require("path"); 

app.use(express.urlencoded({ extended: true})); 

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); 

app.set(express.static(path.join(__dirname, "public"))); 

let posts = [
  {
    username : "apnaduniya", 
    content : "I Love Coding"
  },
  {
    username : "Gautam Rathour", 
    content : "he is doing hard working"
  },
  {
    username : "Rinchu pade", 
    content : "he is doing farmacy"
  },
]; 
 
app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
}); 


app.listen(port, () => {
  console.log("listening to port : 8080 ");
});










