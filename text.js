// const menuToggle = document.getElementById('menuToggle')
// const navMenu = document.getElementById('nav-menu')
// function menuToggle(){
//     navMenu.classList.toggle('nav-menu')
//     console.log('element not found')
// }

// const menuToggle = document.getElementById('menuToggle')
// const navMenu = document.getElementById('nav-menu')
// function menuToggle(){
//     navMenu.classList.toggle('nav-menu')
//     // console.log('element not found')
// }

// const logos = document.getElementsByClassName('logo');
// if(logos.length >= 0){
//     logos[0].classList.add('js-style')
// }else{
//     console.log('logo not found')
// }
    

// const tag = document.getElementsByTagName('h3')
// // const element = document.getElementsByClassName('subtitle')
//     subtitle.classlist.add('.js_style')

// const iLoveMeat = true 

// if(iLoveMeat){
//     document.write('Here Is The Meaty Menu')
// }

let myNum = 28

if(myNum % 2 === 0){
    console.log('odd')
}else{
    console.log('even')
}

// data iteration
// data type array

let color = ["blue", "yellow", "pink", "green", "purple"]
// for loop
for (let i = 0; i < color.length; i++) 
    { console.log(color[i]); }

let number = 20
// number loop
for (let i = 1; i <= 20; i++) 
    { console.log(number); }



let numbs = [1, 2, 3, 4, 5, 6]

numbs.forEach(num => console.log(num));

numbs.forEach(function(num) { 
    console.log(num);
});

let fruits = ["banana", "pineapple", "orange", "berry"]
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//map
let items = ["bread", "tomatoes", "milks", 20]
items.map(item => console.log(item))

// Data type object
const person = [{ name: "Alice", age: 25, city: "Wonderland"}];
// person.map(per => console.log(per))

console.log(person)

Object.values(person).forEach(p => console.log(p))


const numbers = [1, 2, 3, 4];
 // Using map to square each number
const squaredNumbers = numbers.map(num => num * num); console.log(squaredNumbers); // Output: [1, 4, 9, 16]


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Using map to get only the names
const names = people.map(person => person.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]


const statements = people.map(person => `${person.name} is ${person.age} years old.`);
console.log(statements);

people.forEach(person => { console.log(`${person.name} is ${person.age} years old.`); });




document.getElementById("myForm").addEventListener("submit", function(event) { 
    event.preventDefault();
    const firstNameInput = document.getElementById("firstName")
    const lastNameInput = document.getElementById("lastName")
    const emailInput = document.getElementById("email")
    const numberInput = document.getElementById("phoneNumber")

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const number = numberInput.value

    console.log('Name:', firstName)
    console.log("Name:", lastName)
    console.log("email:", email)
    console.log("number:", number)
    console.log("my name is " , firstName)

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value ="";
    numberInput.value = "";
})