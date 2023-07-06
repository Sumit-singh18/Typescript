"use strict";
// Normal Functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 6));
// arrow Functions in ts
const sub = (num1, num2) => num1 - num2;
console.log(sub(6, 2));
// optional Parameter
const multi = (num1, num2, num3) => {
    return num3 ? num1 * num2 * num3 : num1 * num2;
};
console.log(multi(4, 5, 6));
// Required Parameter
const subs = (num1, num2, num3 = 30) => num1 - num2 - num3;
console.log(subs(6, 2, 6));
