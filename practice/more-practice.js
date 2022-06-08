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