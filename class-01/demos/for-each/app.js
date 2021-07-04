// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args

let people = ['Razan','Sherry','Abdulrahman','Aisha'];
// for (let i=0;i<people.length;i++) {
//   console.log(people[i]);
// }

// people.forEach(function(person,index){
//   console.log(person);
//   console.log(index);
// })

// console.log('-----------')

// people.forEach(function(index,person){
//   console.log(person);
//   console.log(index);
// })

// people.forEach((item,index)=>{
//   console.log(item);
//   console.log(index);
// })


function displayName(item,index) {
  console.log(item);
  // console.log(people[index]);
  console.log(item[index]);
}

// let displayName = (item,index) => {
//   console.log(item);
// }
people.forEach(displayName);


