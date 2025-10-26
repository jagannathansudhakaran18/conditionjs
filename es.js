const name = "Jagan";
let age = 21;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

]
function greet(user = "Guest", city = "Chennai") {
  console.log(`Welcome ${user}! Glad to see you from ${city}.`);
}
greet();               // Uses default values
greet("Arun", "Delhi"); // Uses custom values

const person = {
  firstName: "Kumar",
  lastName: "Vel",
  country: "India"
};

const { firstName, country } = person;
console.log(`Name: ${firstName}, Country: ${country}`);

const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;
console.log(`My favorite colors are ${firstColor} and ${secondColor}.`);


const fruits = ["Apple", "Banana", "Mango"];
const newFruits = [...fruits, "Orange"];
console.log("Fruits List:", newFruits);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum =", sum(10, 20, 30, 40)); // Output: 100
