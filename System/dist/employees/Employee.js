"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// src/employees/Employee.ts
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getBaseSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.Employee = Employee;
