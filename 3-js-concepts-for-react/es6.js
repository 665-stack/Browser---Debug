const numbers = [34, 98, 12, 89, 54, 39];
const student = {
    name: "mahmodul shahin",
    age: 18,
    favMovies: ['Lord of the rings', 'The Hobbit', 'John Wick', 'Intersteller'],
};
// 1. template string
const about = `My name is ${student.name}. And my age is ${student.age}. My fav number is ${numbers[3]}. Most fav science related movie is ${student.favMovies[3]}
`;
console.log(about);