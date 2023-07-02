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


// ENUM
enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = CardinalDirections.North;
  
  // North is the first value so it logs '0'
  console.log(currentDirection);


  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);



  