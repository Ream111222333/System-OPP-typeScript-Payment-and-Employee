// src/employees/Developer.ts
import { Employee } from "./Employee";

export class Developer extends Employee {
    private overtimeHours: number;
    private overtimeRate: number;

    constructor(id: number, name: string, salary: number, overtimeHours: number = 0, overtimeRate: number = 50) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
        this.overtimeRate = overtimeRate;
    }

    calculateSalary(): number {
        const overtimePay = this.overtimeHours * this.overtimeRate;
        return this.salary + overtimePay;
    }

    getRole(): string {
        return "Developer";
    }

    getOvertimeHours(): number {
        return this.overtimeHours;
    }

    getOvertimeRate(): number {
        return this.overtimeRate;
    }

    setOvertimeHours(hours: number): void {
        this.overtimeHours = hours;
    }
}
