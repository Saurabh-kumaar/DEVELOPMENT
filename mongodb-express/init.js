
const mongoose = require("mongoose"); 
const Chat = require("./models/chat.js"); 


main()
  .then(() => {
    console.log("connection successful")
  })
  .catch(err => console.log(err)); 


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}



let allChats = [
  {
    from: "neha",
    to: "sona", 
    msg: "hello baby", 
    created_at: new Date(), 
  }, 
  {
    from: "rohit", 
    to: "mohit", 
    msg: "teache me js", 
    created_at: new Date(),
  }, 
  {
    from: "amit", 
    to: "sumit", 
    msg: "all the best", 
    created_at: new Date(), 
  },
  {
    from: "devil", 
    to: "evil", 
    msg: "all is damaged", 
    created_at: new Date(), 
  },
];

Chat.insertMany(allChats);









