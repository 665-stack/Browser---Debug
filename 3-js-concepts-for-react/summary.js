/*
======= fundamentals ============
1.1 variable(const, let) three types of variable

1.2 condition (<, >, ===, !==, <=, >=) && ||, if, else, else if

1.3 array: declare, length, index, push, pop, indexof, includes

1.4 for loop, while

1.5 function return parameter

1.6 object property, including array, object

----------------------------------
============= ES6 ====================
1. template string ${}
2. spread operator (...)
2.1 copy an array then add a new element to an array;
2.2 user filter to remove an element from an array
3. Arrow function
3.1 no parameter ()
3.2 single parameter
3.3 multiple parameter ()
3.4 multt line
4. destructruing : object destruturing,  array destructuring
5. object shorthand
6. function parameter default value
7. optional chaining (?.)

-------------------------------
========== Browser API =============
1. local storage , session storage
2. location API
3. History API
4. fetch
-------------------------
========== others =============
1. array : map, forEach, filter, find
2. ternary operator
3. logical and logical or && ||
4. JSON (strigify, parse)


*/


// some of object shorthand here ------>

// akhane object er property er name er value ta akhaner global variable theke astece.
const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
}
console.log('obj -- ', obj);
// more shortcut
const obj2 = { x, y }
console.log('obj2 -- ', obj2);


//------
// another example
const name = 'Bhawal';
const area = 'Gazipur';
const raja = {
    name: name,
    area: area,
}
console.log('raja -- ', raja);
// more shortcut
const raja2 = { name, area };
console.log('raja2 -- ', raja2);
