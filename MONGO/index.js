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


// // delete------ mongoose----------- 
User.findByIdAndDelete("688bb2e0811e9c1476e1d373")
  .then((res) => {
    console.log(res); 
  });
   


// find update value ----------
// User.findOneAndUpdate({ name: "raju" }, { age: 90}, {new: true})
//   .then((res) => {
//     console.log(res); 
//   })
//   .catch((err) => {
//     console.log(err); 
//   });


// find value -----------------------
// User.findById("688fae383a53c54fec02db44")
//   .then((res) => {
//     console.log(res); 
//   })
//   .catch((err) => {
//     console.log(err); 
//   }); 






// find ----- search id ---------- 
// User.findById("688bb2e0811e9c1476e1d373")
//   .then((res) => {
//     console.log(res); 
//   })
//   .catch((err) => {
//     console.log(err); 
//   }); 


// inser add function --------------- 
// User.insertMany([
//   {name: "Tony", email: "tonybhai@gmail.com", age: 23}, 
//   {name: "aman", email: "aman@gmail.com", age: 20}, 
//   {name: "kaju", email: "kaju@gmail.com", age: 21}, 
// ]).then((res) => {
//   console.log(res); 
// });






// const user2 = new User({
//   name: "evil",
//   email: "evil@yahoo.in",
//   age: 21,
// }); 

 
// user2.save()
//   .then((res)=> {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err); 
//   }); 
 




