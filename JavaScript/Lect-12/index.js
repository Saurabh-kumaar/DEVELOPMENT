
//         // async 

// // async function greet() {
// //   throw "404 not found"
// //   return "hello"; 
// // }
 
// // greet() 
// //   .then((result) => {
// //     console.log("promise was resolved"); 
// //     console.log("result was : ",  result); 
// //   })
// //   .catch((err) => {
// //     console.log("promise was rejected with err :", err);
// //   });

// // let demo = async () => {
// //   return 10; 
// // } 

//                 // await keyword 

// // function getNum() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       let num = Math.floor(Math.random() * 10) + 1; 
// //       console.log(num); 
// //       resolve(); 
// //     }, 1000); 
// //   }); 
// // } 

// // async function demo() {
// //   await getNum(); 
// //   await getNum(); 
// //   getNum(); 
// // }


// // --------------------- 

// // change color with the help of async and await function 

// // h1 = document.querySelector("h1"); 

// // function changeColor(color, delay) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => { 
// //       let num = Math.floor(Math.random() * 5) +1; 
// //       if(num > 3) {
// //         reject("promise rejected"); 
// //       } 

// //       h1.style.color = color; 
// //       console.log(`color changed to ${color}!`); 
// //       resolve("color changed!"); 
// //     } , delay); 
// //   }); 
// // }

// // async function demo() {   // handling rajection 
// //   try { 
// //     await changeColor("red", 1000);
// //     await changeColor("pink", 2000);  
// //     await changeColor("green", 3000); 
// //     await changeColor("orange", 4000); 
// //     await changeColor("blue", 5000); 
// //   } catch (err) {
// //     console.log("error caught"); 
// //     console.log(err); 
// //   }
// // }adf 
  
// // --------------------------------------------------------------

//                 // Accesing JSON data :- 


// // let jsoRes = '{"fact":"People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.","length":165}';
// // let validRes = JSON.parse(jsoRes); 
// // console.log(validRes); 

// // let student = {
// //         age: 34, 
// //         name: "devil"
// // };

// // ------------------------


//         // our first api 


// // let url = "https://catfact.ninja/fact"; 
 
// // fetch(url) 
// //     .then((res) => {
// //          return res.json(); 
// //     }) 
// //     .then((data) => {
// //         console.log("data1 = ",data.fact); 
// //         return fetch(url); 
// //     })
// //     .then((res) => {
// //         return res.json(); 
// //     })
// //     .then((data2) => {
// //         console.log("data2 =", data2.fact); 
// //     })
// //     .catch((err) => {
// //         console.log("ERROR -", err); 
// //     }); 

// // ========================================================================== 


// // let url = "https://catfact.ninja/fact"; 


//         // help of fetch 
// // async function getfacts() {  
// //     try {
// //         let res = await fetch(url); 
// //         let data = await res.json(); 
// //         console.log(data.fact); 
  
// //         let res2 = await fetch(url); 
// //         let data2 = await res2.json(); 
// //         console.log(data2.fact);  
// //     } catch (e) {
// //         console.log("error -", e); 
// //     } 
// //     console.log("byeee"); 
// // }

//     // same code help of-------axios  

// // =================================================== 
//             // add button print fact on html web 

// // let btn = document.querySelector("button");
// // let url2 = "https://dog.ceo/api/breeds/image/random";   

// // btn.addEventListener("click", async () => {
// //     let link = await getImage(); 
// //     let img = document.querySelector("#result"); 
// //     img.setAttribute("src", link); 
// //     console.log(link); 

// // }); 

// // async function getImage() {
// //    try{
// //        let res = await axios.get(url2);  
// //        return res.data.message; 
// //     } catch (e) {
// //        console.log("error -", e); 
// //        return "/";
// //    }
// // }

// // ------------ 


// // btn.addEventListener("click", async () => { 
// //      let fact = await getFacts(); 
// //      console.log(fact); 
// //      let p = document.querySelector("#result"); 
// //      p.innerText = fact; 

// // }); 

// // async function getFacts() {
// //     try{
// //         let res = await axios.get(url); 
// //         return res.data.fact; 
// //     } catch (e) {
// //         console.log("error -", e); 
// //         return "No fact found"; 
// //     }
// // }


// // ================================== 

//         // sending header with API request 

// const url = "https://icanhazdadjoke.com/"; 

// async function getJokes() {
//     try {
//         const config = { header: { Accept: "application/json" }};
//         let res = await axios.get(url, config); 
//         console.log(res); 
//     } catch (err) {
//         console.log(err);
//     }
// } 

// ====================================================== 

            // used api check for country colleges 
            

// let url ="http://universities.hipolabs.com/search?name="; 
// let btn = document.querySelector("button"); 

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value; 
//     console.log(country); 

//     let colArr = await getColleges(country); 
//     show(colArr); 
//   });


//    function show(colArr) { 
//     let list = document.querySelector("#list"); 
//     list.innerText = "";

//     for(col of colArr) {
//         console.log(col.name);  

//         let li = document.createElement("li"); 
//         li.innerText = col.name; 
//         list.appendChild(li); 
//     }
//    }
 
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country); 
//         return res.data; 
//     } catch (e) { 
//         console.log("error : ", e);   
//         return []; 
//     }
// }
// ========================================================== 

            // this api check for state using same code as up code 


let url ="http://universities.hipolabs.com/search?name="; 
let btn = document.querySelector("button"); 

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value; 
    console.log(state); 

    let colArr = await getColleges(state); 
    show(colArr); 
  });


   function show(colArr) { 
    let list = document.querySelector("#list"); 
    list.innerText = "";

    for(col of colArr) {
        console.log(col.name);  iour

        let li = document.createElement("li"); 
        li.innerText = col.name; 
        list.appendChild(li); 
    }
   }
 
async function getColleges(state) {
    try {
        let res = await axios.get(url + state); 
        return res.data; 
    } catch (e) { 
        console.log("error : ", e);   
        return []; 
    }
}












