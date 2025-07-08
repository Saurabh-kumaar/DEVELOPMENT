const express = require("express"); 
const app = express(); 
const port = 8080; 
const path = require("path");
const { v4: uuidv4 } = require(('uuid'));
const methodOverride = require("method-overri")

app.use(express.urlencoded({ extended: true})); 
app.use(methodOverride("_method") );
// app.use(express.json());

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); 

app.use(express.static(path.join(__dirname, "public"))); 

let posts = [
  {
    id: uuidv4(),
    username : "apnaduniya", 
    content : "I Love Coding"

  },
  { fd 
    id:  uuidv4(),
    username : "Gautam Rathour", 
    content : "he is doing hard working"
  },
  {
    id:  uuidv4(),
    username : "Rinchu pade", 
    content : "I got selected"
  },
]; 
 
app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
}); 


app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); 
});

app.post("/posts", (req, res) => {
  // console.log(req.body);
   let { username, content } = req.body; 
   let id = uuidv4(); 
  posts.push({ id , username, content }); 
  // res.send("post requests working");
  res.redirect("/"); 

});




app.get("/posts/:id", (req, res) => {
  let { id } = req.params; 
  let post = posts.find((p) => id === p.id); 
  res.render("show.ejs", { post }); 
  // res.send("request working"); 
});




app.patch("/posts/:id", (req, res) => {
  let { id } = req.params; 
  let newContent = req.query.content;
  let post = posts.find((p) => id === p.id); 
  post.content = newContent;
  console.log(post); 

  // console.log(newContent); 
  res.send("patch request working"); 
}); 


app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params; 
  let post = posts.find((p) => id === p.id); 
  res.render("edit.ejs", { post });

})



app.listen(port, () => {
  console.log("listening to port : 8080 ");
});


 








