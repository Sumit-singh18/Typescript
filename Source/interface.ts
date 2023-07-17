interface User {
  names: string;
  // optional value of age
  age?: number;
  Contact: number;
  email: string;
}

let user: User = {
  names: "Sumit",
  Contact: 9988987611,
  email: "ss37373@gmail.com",
};
console.log(user);

interface Employees extends User {
  salary: number;
}

let Employees: Employees = {
    names: "Sumit",
    Contact: 9988987611,
    email: "ss37373@gmail.com",
  salary: 8855,
};
console.log(Employees);
