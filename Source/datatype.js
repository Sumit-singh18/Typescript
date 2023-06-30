"use strict";
// String
let names;
names = "Sumit";
let newname = names.toUpperCase();
console.log(newname);
// Number
let age;
age = 88;
// Typecasting
let dob = "44";
let result = parseInt(dob);
console.log(result);
// Boolean 
// in js if you not give any value it will give false
// In ts if you not assign any value it will give undefined
let isValid = true;
console.log(isValid);
// Array
let empList = ['Sumit', 'Sumit2', 'Sumit3'];
console.log(empList);
let depNum = [1, 2, 33, 4, 4, 3];
console.log(depNum);
let results = depNum.filter((depNum) => depNum > 2);
console.log(results);
let sum = depNum.reduce((acc, num) => acc + num);
console.log(sum);
