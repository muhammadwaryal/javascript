// length -- counts character


let name = "Muhammad-Waryal";
console.log(name.length);

// uppercase and lowercase
let city = "karachi";
console.log(city.toUpperCase());
console.log(city.toLowerCase());

// includes - it check the foodItems or word exict if it exist it retains otherwise false
let foodItems= ["Banana","Apple","Vegetables","Milk"];
console.log(foodItems.includes("Apple"));

let todolist = ["Learning-Js","sleeping"];
console.log(todolist.includes("javascript"));
// SLice method index starting from 0 till 4
let textSlice = "I Love Javascript";
console.log(textSlice.slice(2,5));

// replace method
let msg = "Hello World";
console.log(msg.replace("World","JS"));


//push - add at end
let fruits = ["Orange","Peach","Banana",];
fruits.push("Watermelon");
fruits.push("Apple");
console.log(fruits);

//remove from end
fruits.pop();
console.log(fruits);

// remove from start using shift method
fruits.shift();
console.log(fruits);

//add at start
fruits.unshift("Kivi");
console.log(fruits);


// Map method - to transform the element return the new array
let number = [1,2,3,4,5];
let fiveTimes = number.map((n=> n*5));
console.log(fiveTimes);

// filter -- get those element that match conditions
let evenNumber= [2,3,4,5,6,8,9];
console.log(number.filter(n => n%2 ===0));

// find
let age = [10,18,30];
console.log(age.find(a => a>=18));

//Date
//object Method
// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getFullYear());

let today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth()); // 0–11
console.log(today.getDate());

console.log(today.getDay());
console.log(today.getTime());


setTimeout(()=>{
          console.log("hello after 5 seconds")
},5000);


// fetch
// fetch("https://api.example.com")
//   .then(res => res.json())
//   .then(data => console.log(data));


