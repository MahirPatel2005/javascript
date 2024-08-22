// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566
// };

// // console.log(person.fullName)
// person.name = function (){
//     return (this.firstname + " " + this.lastname).toUpperCase();
// };


// 1
// // done by myself 1st try 
// const person = {name : 'john',age : 25,city : "newyork"}
// console.log(person)

// 2
// 1st try by myself

// const obj = { name: 'Alice', age: 30 };
// function getProperty(obj,name){
//     a = obj.name
//     console.log(a)
// }

// getproperty(obj,'name')


// 3
// first try 
// const car = { brand: 'Toyota', model: 'Corolla' };
// function addproperty(property,value){
//     car.year = value
// }
// addproperty("year","2020")
// console.log(car)


//4
// chat gpt
//  const user = { username: 'john_doe', password: '12345' };

// function deleteProperty(obj, prop) {
//     if (obj.hasOwnProperty(prop)) {
//         delete obj[prop];
//         return true;
//     } else {
//         return false;
//     }
// }
// deleteProperty(user, 'password');
// console.log(user);


//5 
// // 1st tryyy 
// const obj = { name: 'Alice', age: 30 };
// function hasProperty(obj, prop) {
//     if (obj.hasOwnProperty(prop)) {
//         return true;
//         // console.log("true")
//     } else {
//         return false;
//     }
// }
//  console.log(hasProperty(obj, 'age'));

//6
// 2nd try 
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// function mergeObjects(obj1,obj2){
//     const mergedObj = Object.assign({}, obj1, obj2);
//     console.log(mergedObj);
// }
// mergeObjects(obj1,obj2)

// 7th
















// 8 
// 1st try

// **Loop Through Object Properties**
// - Task: Write a function that loops through all the properties of an object and prints them.
// - Test:
//   ```javascript
//   const user = { name: 'John', age: 30, city: 'New York' };
//   printProperties(user);


// function printProperties(obj) {
//     for (const prop in obj) {
//       console.log(`${prop}: ${obj[prop]}`);
//     }
//   }
  
//   const user = { name: 'John', age: 30, city: 'New York' };
//   printProperties(user);


// 9th 
// 1st try 
// const obj = { name: 'Alice', age: 30, city: 'NYC' , abc : 123};
// function countProperties(obj) {
//   return Object.keys(obj).length;
// }
// console.log(countProperties(obj)); 


