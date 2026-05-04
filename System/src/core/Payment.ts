// src/core/Payment.ts
export interface Payment {
    pay(amount: number): boolean;
    validate(): boolean;
    generateReceipt(): void;
}