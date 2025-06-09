
const figlet = require("figlet"); 

figlet("Devil", function (err, data) {
  if(err) {
    console.log("something went wrong.."); 
    console.dir(err); 
    return; 
  }
  console.log(data); 
});









sg 