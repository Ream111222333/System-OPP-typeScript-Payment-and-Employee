// src/employees/Manager.ts
import { Employee } from "./Employee";

export class Manager extends Employee {
    private bonus: number;

    constructor(id: number, name: string, salary: number, bonus: number) {
        super(id, name, salary);
        this.bonus = bonus;
    }

    calculateSalary(): number {
        return this.salary + this.bonus;
    }

    getRole(): string {
        return "Manager";
    }

    getBonus(): number {
        return this.bonus;
    }
}
