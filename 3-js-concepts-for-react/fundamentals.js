// 1. How to declare a variable using let and const
const fatherName = "Milon";
let season = 'rainy';
season = 'winter';

//===================================

// 2. conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

//==================================

// 3. array declare
// index,
// length, push, pop
const numbers = [34, 98, 12, 89, 54, 39];
numbers[3] = 77;
console.log('numbers indexof -- ', numbers.indexOf(54))
console.log('numbers length -- ', numbers.length);
numbers.push(23)
numbers.pop()

//=========================
// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log('for loop -- ', number);
}
for (const number of numbers) {
    console.log('for of --', number);
}
//====================================
// 5. function
function multiply(num1, num2) {
    return result = num1 * num2;
}
console.log('multifly num in func -- ', multiply(5, 5));

//==========================
// 6. object
// 3 way to access property by name
const student = {
    name: "mahmodul shahin",
    age: 18,
    favMovies: ['Lord of the rings', 'The Hobbit', 'John Wick', 'Intersteller'],
}
// direct by property
console.log('1st way -- ', student.age);
// access via property name string
console.log('2nd way -- ', student['favMovies']);
// access via property name in a variable
const myVariable = 'name'
console.log('3rd way -- ', student[myVariable]);
