// 1. JOSN
const student = {
    name: "mahmodul shahin",
    age: 18,
    favMovies: ['Lord of the rings', 'The Hobbit'],
};
// stringify
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
// parse
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
// ===========================
// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

//=====================
// 3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//=======================
// 4. for 
const numbs = [23, 543, 45, 23];
numbs.forEach(numb => console.log('numb -- ', numb))
numbs.map(numb => console.log('using map -- ', numb * 2))
// for of on array like object
// loop on an object using for in


//==========================
// add or remove from an array
const products = [
    { name: 'laptop', price: 46000, brand: 'MSI', color: 'black' },
    { name: 'phone', price: 35000, brand: 'realme', color: 'gray' },
    { name: 'watch', price: 2500, brand: 'haylue', color: 'black' },
    { name: 'headphone', price: 900, brand: 'havit', color: 'black' },
    { name: 'keyboard', price: 1800, brand: 'logitech', color: 'gray' },
];
const newProduct = { name: 'webcam', price: 3000, brand: 'logitech' };
//copy products array and then add newProduct
const newProducts = [...products, newProduct]
console.log('newProducts -- ', newProducts);

//=======================
// create a new array withour one specific item
// remove phone (item) means create a new array without the phone(item).
const remaining = products.filter(product => product.name !== 'phone');
console.log(' remaining -- ', remaining);