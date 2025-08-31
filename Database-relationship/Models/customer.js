
const mongoose = require("mongoose"); 
const { Schema } = mongoose; 

main() 
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err)); 

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number, 
}); 

const customerSchema = new Schema({
  name: String, 
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
}); 

customerSchema.post("findOneAndDelete", async () => {
  console.log("POST MIDDLEWARE"); 
}); 

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);
 

// function 
const findCustomer = async () => {
  let result = await Customer.find({}).popular("orders"); 
  console.log(result[0]); 
}; 

const addCust = async () => {
  let newCust = new Customer({
    name: "karan ajula bhai"
  }); 

  let newOrder = new Order({
    item: "Burger", 
    price: 340,
  }); 

  let newBanda = new Order({  // --- added by itself
    item: "dhosa", 
    price: 890
  }); 

  let grahak = new Order({
    item: "rasgulla",
    price: 400,
  })

  newCust.orders.push(newOrder); 
  newCust.orders.push(newBanda);  //------itself 
  newCust.orders.push(grahak);

  await newOrder.save(); 
  await newCust.save();  
  await newBanda.save(); // ------ itself
  await grahak.save(); 

  console.log("added new customer");
}; 
 
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("68b45296e904ea6d5c81d26c")
};
 

delCust(); 
// addCust(); 

