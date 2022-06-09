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
