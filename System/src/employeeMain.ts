// src/employeeMain.ts
import { Employee } from "./employees/Employee";
import { Manager } from "./employees/Manager";
import { Developer } from "./employees/Developer";
import { Intern } from "./employees/Intern";

function main() {
    console.log("Example Output\n");

    // Create employees using polymorphism
    const employees: Employee[] = [
        new Manager(1, "John Smith", 2500, 500),  // salary: 2500, bonus: 500 = 3000
        new Developer(2, "Alice Johnson", 2000, 10),  // salary: 2000, overtime: 10*50 = 500 = 2500
        new Intern(3, "Bob Wilson", 500)  // allowance: 500
    ];

    // Demonstrate polymorphism
    for (const employee of employees) {
        console.log(`Role: ${employee.getRole()}`);
        console.log(`Salary: ${employee.calculateSalary()}`);
        console.log(); // Empty line for spacing
    }
}

// Run the program
main();
