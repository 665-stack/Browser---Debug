// 1. array destructuring
const numbers = [23, 55, 33];
const [x, y, z] = numbers;
console.log('normal destr. -- ', x, y, z);
//-------------------------
const boxify = (num1, num2) => {
    const nums = [num1, num2];
    return nums;
}
const [first, second] = boxify(90, 34);
console.log('func destr. -- ', first, second);
//-----------------------
const student = {
    name: "mahmodul shahin",
    age: 18,
    favMovies: ['Lord of the rings', 'The Hobbit'],
};
const [firstMovie, secondMovie] = student.favMovies;
console.log('favMovies -- ', firstMovie, secondMovie);

// 2. object destructuring
const { name, age } = { name: 'akash', age: 19 };

const { user, relationshipStatus, salary } = { user: 'Mahmodul Shahin', salary: 34000, relationshipStatus: 'single' };
//--------------------
const employee = {
    id: '202',
    designation: 'developer',
    machine: 'windows laptop',
    language: ['html', 'css', 'js'],
    specification: {
        height: 69,
        weight: 50,
        address: 'Gazipur',
        watch: {
            model: 'haylou rs4',
            price: 3500,
            color: 'black'
        }
    }
}
const { machine, id } = employee;
const { address, height } = employee.specification;
const { model } = employee.specification.watch;
const { mobile } = employee?.specification;
console.log(mobile);