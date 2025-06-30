 
// let arr = [1, 3, 5]; 
// let arr2 = [5, 2, 8]; 
// arr.sayHello = () => {
//   console.log("hello brother!, i am arr"); 
// }; 

// arr2.sayHello = () => {
//   console.log("hello brother!, i am arr"); 
// }; 

    // Factory function .--------------- 

// function PersonMaker(name, age) {
//   const person = {
//     name: name, 
//     age: age, 
//     talk() {
//       console.log(`Hi my name is ${this.name}`); 
//     },
//   };
//   return person; 
// }


// Constructors-- it doesnot return anything & start with capital

// function Person(name, age){
//   this.name = name; 
//   this.age = age;
//   console.log(this);  
// }

// Person.prototype.talk = function() {
//   console.log(`hi, my name is ${this.name}`); 
// } 

// let p1 = new Person("sauranj", 23); 
// let p2 = new Person("sal", 2); 

// --------------------------------------------------- 

  // classes in js 


// class Person {
//   constructor(name, age) {
//     this.name =  name; 
//     this.age = age; 
//   }

//   talk() {
//     console.log(`Hi, my name is ${this.name}`); 
//   }
// }

// let p1 = new Person("adam", 25); 
// let p2 = new Person("doma", 4); 


// --------------------------------------------- 

  // ----------------// Inheritance ------------
// 1:- 

// class Person {
//   constructor(name, age) {
//     console.log("person class constructor"); 
//     this.name = name; 
//     this.age = age; 
    
//   }
//   talk() {
//     console.log(`Hi, I am ${this.name}`); 
//   }
// }


// class Student extends Person {
//   constructor(name, age, marks){
//      console.log("Student class constructor")
//      super(name, age); // parent class constructor is being called 
//     this.marks = marks; 
//   }
// }
 

// class Teacher extends Person{
//   constructor(name, age, subjects){
//     super(name, age); // parent class constructor is being called
//     this.subjects = subjects; 
//   }
// }

// --------------------------------------- 

class Mammal {
  constructor(name) {
    this.name = name; 
    this.type = "warm-blooded"; 
  }

  eat() {
    console.log("I am eating"); 
  }
}

class Dog extends Mammal{  // childdd
  constructor(name ) {
    super(name); 
    
  }

  bark() {
    console.log("wooff......")
  }
} 

class Cat extends  Mammal {  // childdd 
  constructor(name) {
    super(name); 
  }

  speak() {
    console.log("meoooowwww.......")
  }
}


 














