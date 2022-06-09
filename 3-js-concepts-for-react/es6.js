const numbers = [34, 98, 12, 89, 54, 39];
const student = {
    name: "mahmodul shahin",
    age: 18,
    favMovies: ['Lord of the rings', 'The Hobbit', 'John Wick', 'Intersteller'],
};
// 1. template string
const about = `My name is ${student.name}. And my age is ${student.age}. My fav number is ${numbers[3]}. Most fav science related movie is ${student.favMovies[3]}
`;
console.log('about -- ', about);

//===============================

// 2. arrow function 
const getFiftyFive = () => 55;

const addSixtyFive = num => num + 65;

const isEven = x => x % 2 == 0;

const addThree = (x, y, z) => x + y + z

const doMath = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    const divide = sum / 2;
    return divide;
}

//=========================
// 3. spread operator; jodi uporer numbers array theke sompurno bichinno babe arekte array make korte cai.
const newNumber = [...numbers]
numbers.push(99)
numbers.push(89)
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]
console.log(numbers);
console.log('newNumber -- ', newNumber);
console.log('currentNumbers -- ', currentNumbers);

