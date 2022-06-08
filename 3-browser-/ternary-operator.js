//age liktam
var age = 18;
let type;
if (age >= 18) {
    type = 'adult'
} else {
    type = 'child'
}
console.log(type);

// with ternary opetator; akhane ? mark porer tuku if else er poriborte deya hoice. 
var age2 = 17;
var type2 = (age2 >= 18) ? "aduit" : "child";
console.log(type2);

// ar jobi else if jinish er poriboter kicu use korte chai.
var age3 = 12;
var type3 = (age3 >= 18) ? 'adult' : (age3 < 10) ? 'child' : 'young';
console.log(type3);