"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = require("./employees/Manager");
var Developer_1 = require("./employees/Developer");
var Intern_1 = require("./employees/Intern");
function main() {
    console.log("Example Output\n");
    // Create employees using polymorphism
    var employees = [
        new Manager_1.Manager(1, "John Smith", 2500, 500), // salary: 2500, bonus: 500 = 3000
        new Developer_1.Developer(2, "Alice Johnson", 2000, 10), // salary: 2000, overtime: 10*50 = 500 = 2500
        new Intern_1.Intern(3, "Bob Wilson", 500) // allowance: 500
    ];
    // Demonstrate polymorphism
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        console.log("Role: ".concat(employee.getRole()));
        console.log("Salary: ".concat(employee.calculateSalary()));
        console.log(); // Empty line for spacing
    }
}
// Run the program
main();
