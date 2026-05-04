// src/employees/Intern.ts
import { Employee } from "./Employee";

export class Intern extends Employee {
    private allowance: number;

    constructor(id: number, name: string, allowance: number) {
        super(id, name, 0); // Interns don't have base salary, only allowance
        this.allowance = allowance;
    }

    calculateSalary(): number {
        return this.allowance;
    }

    getRole(): string {
        return "Intern";
    }

    getAllowance(): number {
        return this.allowance;
    }

    setAllowance(allowance: number): void {
        this.allowance = allowance;
    }
}
