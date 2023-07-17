"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_name;
class Employee {
    constructor(ids, Adderess, name) {
        //   We made the name private by using  the # Symbol or we can use Private
        _Employee_name.set(this, void 0);
        this.Address = Adderess;
        this.ids = ids;
        __classPrivateFieldSet(this, _Employee_name, name, "f");
    }
}
_Employee_name = new WeakMap();
let John = new Employee(1, "Sumit", "PK34");
console.log(John);
