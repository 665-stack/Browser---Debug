console.log('first');

// ager setTimeout shobar sheshe call hoto but 1bar hoto, but setInterval shobar sheshe call hobe and bar bar hotei thakbe loop er moto. tokhon terminal thake loop bondo korte caile ctrl c chap dite hobe. but aibabe bondo kora thik na. Karon user to ar ctrl c diye bondo korte parbe na. Tai code e akta condition bitore clearInterval diye bondo korte parbo.

// setInterval(() => {
//     console.log('--- exploring setInterval');
// }, 1000);


// setInterval er loop bondo korar system
let seconds = 0;
const timeID = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds >= 15) {
        clearInterval(timeID)
    }
}, 1000);


console.log('second');