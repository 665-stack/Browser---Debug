const arr = [];
const forEach = arr.forEach(x => {
    return x;
});
// console.log(forEach);
const map = arr.map(x => {
    return x;
})

// console.log(map);
//============================
const name = 'Hero';
const age = 34;
const person = { name, age };
// console.log(person);
//=========================
const user = { name: 'babe' }
// console.log(user[name]);
//======================
const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);
//==========================
let person2 = null;
// console.log(person2 ? person2 : "person2 is null");
//======================
const numbs = [23, 25, 66, 99, 88]
const bigNumbs = numbs.filter(numb => numb > 339)
// console.log(bigNumbs);
//===================
const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);
//===================
const boyosh = '33';
console.log(+boyosh);
//======================
