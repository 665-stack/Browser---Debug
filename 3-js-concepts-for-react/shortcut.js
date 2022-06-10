
/*
==> thuthy ==> "shahin", 5, true, {}, []
==> falsy ==> '', 0, false, null, undefined
*/
// check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}
// check negative ro falsy anything
let myMoney = -2;
if (!myMoney) {
    console.log('positive');
}
else {
    console.log('negatives');
}
//------------------
const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
} else {
    food = 'cha biscuit'
}
console.log('food -- ', food);

// ==================
// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log('food1 -- ', food1);
//----------
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log('drink -- ', drink);
//=======================
// number to string convertion
const num1 = 53;
const numStr = num1 + '';
console.log('numStr -- ', numStr);
// string to number
const input = '560';
const inputNum = +input;
console.log('inputNum -- ', inputNum);


//==================
let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();
//=====================
// toggle boolean
isActive = !isActive;
console.log(isActive);