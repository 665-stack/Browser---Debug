arr = () => {
    return 9;
}
console.log(arr());
//====================
arrTwo = num => {
    return num * 12;
}
console.log(arrTwo(10));
//===========================
arrThree = (num1, num2) => {
    const sumNum = num1 + num2;
    const divide = sumNum / 4;
    return divide;
}
console.log(arrThree(9, 11))
//============================
arrFour = (num1, num2) => {
    const sum1 = num1 + 5;
    const sum2 = num2 + 5;
    const multiply = sum1 * sum2;
    return multiply;
}
console.log(arrFour(5, 5));
//======================
const user = {
    name: 'mahmodul hasan shahin',
    salary: 20000,
    position: "web developer"
}
const firstNmae = user.name
console.log(firstNmae);
//==========================
const customer = {
    name: 'Mahmodul Shahin',
    age: 18,
    profession: 'Web Developer'
}
const { name, profession, age } = customer;
console.log(name, age);
//====================
const profile = ['mahmodul shahin', 12000, 18,];
const [nam, balance, boyosh] = profile;
console.log(balance);
//==================
const defaultPara = (a, b = 5) => {
    return a * b;
}
console.log(defaultPara(5));
//===================
const adventurer = {
    name: 'Munsora Mim',
    cat: {
        name: 'Bilo'
    }
}
const CatName = adventurer.dog?.name;
console.log(CatName);
//=====================
const randomNum = [1, 23, 4, 3, 5, 2, 9, 4, 8];
const userMap = randomNum.map(x => x * 2);
console.log(userMap);
//========================
/* 
==> map() array er protity upadan er jonno function ke call kore abong function er result ke akti noton array te niye return kore.

==> forEach() akti array er protity upadan er jonno function ke call kore. kinto kono kicu return kore na.

==> filter() array er protity upadan er modde jeta jeta shorto fullfill korbe taderke noton akta array te rekhe shetake return kore. filter() array return kore.

==> find() array er prothom je upadan shorto full fill korbe shodu takei return korbe. find element return kore.
*/