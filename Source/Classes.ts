class Employee {
  Address: string;

//   We made the name private by using  the # Symbol or we can use Private
  #name: string;
  ids: number;

  constructor(ids: number, Adderess: string, name: string) {
    this.Address = Adderess;
    this.ids = ids;
    this.#name = name;
  }
}

let John = new Employee(1, "Sumit", "PK34");

console.log(John);
