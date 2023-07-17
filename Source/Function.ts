// Normal Functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 6));

// arrow Functions in ts
const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(6, 2));

// optional Parameter
const multi = (num1: number, num2: number, num3?: number): number => {
  return num3 ? num1 * num2 * num3 : num1 * num2;
};
console.log(multi(4,5,6));

// Required Parameter
// numm3 is required paramter iff nothing is given then it will take 30 by dfault
const subs = (num1: number, num2: number , num3:number=30): number => num1 - num2-num3;
console.log(subs(6, 2,6));

// Rest parameter

// Generic Functions





