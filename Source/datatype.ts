// String
let names :string;
 names = "Sumit";

let newname= names.toUpperCase();
console.log(newname);


// Number
let age: number;
age=88;


// Typecasting
let dob ="44";
let  result = parseInt(dob)
console.log(result);

// Boolean 
// in js if you not give any value it will give false
// In ts if you not assign any value it will give undefined
let isValid :boolean =true;

console.log(isValid)


// Array

let empList :string[] =  ['Sumit', 'Sumit2', 'Sumit3']

console.log(empList)


let depNum : Array<number>= [ 1,2,33,4,4,3]
console.log(depNum)

// filter
let results = depNum.filter((depNum)=> depNum>2);
console.log(results)

// Reduce
let sum = depNum.reduce((acc,num)=>acc+num);
console.log(sum)


