function doSomething() {
    console.log(" ---- I am coding JavaScript");
}
console.log('First: --- I am the first person');
console.log('Second: --- I am the second person');
// akhaner setTimeout mane she shobar sheshe jabe. shobgulo console er por jokhon ar kono kaj thakbe na then she call hobe/ jabe. er shathe shogkha mane koto milisecond pore call hobe. second jetar kom thakbe sheta age jabe, second jetar beshi thakbe sheta pore jabe, no mettar konta age konta pore likha hoice. 3000 milisecond mane 3 second. ==> setTimeout Asynchronous babe kaj kore.

setTimeout(doSomething, 3000)
setTimeout(function () {
    console.log('--- function in setTImeout');
}, 5000);

setTimeout(() => {
    console.log('--- arrow function in setTimeout');
}, 2000);


console.log('Third: --- I am the third person');
console.log('Fourth: --- I am ther fourth person');
