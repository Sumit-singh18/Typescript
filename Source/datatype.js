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
// filter
let results = depNum.filter((depNum) => depNum > 2);
console.log(results);
// Reduce
let sum = depNum.reduce((acc, num) => acc + num);
console.log(sum);
// ENUM
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
let currentDirection = CardinalDirections.North;
// North is the first value so it logs '0'
console.log(currentDirection);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// TUPLE
let ourtuple;
ourtuple = [5, true, "Code Works"];
console.log(ourtuple);
ourtuple.push("New Push");
console.log(ourtuple);
// ReadOnly Tuple
let tuples;
tuples = [3, "coding"];
console.log(tuples);
