// src/core/AbstractPayment.ts
import { Payment } from "./Payment";

export abstract class AbstractPayment implements Payment {
    protected transactionId: string;
    protected amount: number = 0;
    protected paymentDate: string;

    constructor() {
        this.transactionId = `TXN-${Date.now()}`;
        this.paymentDate = new Date().toLocaleString('en-US');
    }

    protected printHeader(): void {
        console.log("=========================================");
        console.log("          PAYMENT RECEIPT          ");
        console.log("=========================================");
    }

    abstract pay(amount: number): boolean;
    abstract validate(): boolean;
    abstract generateReceipt(): void;
}