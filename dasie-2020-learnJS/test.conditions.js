/*if et else*/

function testNum(a) {
    if (a > 0) {
        return "a is positive";
    } else if (a === 0) {
        return "a equals 0";
    } else {
        return "a is negative";
    }
}

console.log(testNum(-5));
console.log(testNum(5));
console.log(testNum(0));



/*ternary operator*/
let myVar = (3 === 3 ? "vrai" : "faux"); //condition ? exprSiVrai : exprSiFaux 
myVar;