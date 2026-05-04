// src/payments/CashPayment.ts
import { AbstractPayment } from "../core/AbstractPayment";

export class CashPayment extends AbstractPayment {
    private moneyGiven: number;
    private change: number = 0;

    constructor(moneyGiven: number) {
        super();
        this.moneyGiven = moneyGiven;
    }

    validate(): boolean {
        console.log("✅ Cash Data validation successful");
        return true;
    }

    pay(amount: number): boolean {
        this.amount = amount;
        if (this.moneyGiven >= amount) {
            this.change = this.moneyGiven - amount;
            console.log(`💵 Paid via Cash ${amount} $ successfully!`);
            return true;
        } else {
            console.log("❌ Insufficient funds!");
            return false;
        }
    }

    getChange(): number {
        return this.change;
    }

    generateReceipt(): void {
        this.printHeader();
        console.log("Payment Type: Cash Payment");
        console.log(`Cash Given    : ${this.moneyGiven} $`);
        console.log(`Total Amount  : ${this.amount} $`);
        console.log(`Change        : ${this.change} $`);
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log("=========================================");
    }
}