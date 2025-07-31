const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // same code like under

main()
  .then(()  =>  {
    console.log("connection successful");
  })
  .catch((err) => console.log(err)); 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({  // user schema create
  name: String, 
  email: String, 
  age: Number,
});

const User = mongoose.model("User", userSchema);  // schema ko db collection me convert kar rhe hai

const user1 = new User({
  name: "Adam",
  email: "adam@yahoo.in",
  age: 49,
}); 

user1.save(); 
 
akljf lhyiu

adjflkdf 



