// src/employees/Employee.ts
export abstract class Employee {
    protected id: number;
    protected name: string;
    protected salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    abstract calculateSalary(): number;
    abstract getRole(): string;

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getBaseSalary(): number {
        return this.salary;
    }
}
