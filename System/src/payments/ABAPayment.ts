// src/payments/ABAPayment.ts
import { AbstractPayment } from "../core/AbstractPayment";

export class ABAPayment extends AbstractPayment {
    private accountNumber: string;
    private phoneNumber: string;

    constructor(accountNumber: string, phoneNumber: string) {
        super();
        this.accountNumber = accountNumber;
        this.phoneNumber = phoneNumber;
    }

    validate(): boolean {
        if (this.accountNumber.length >= 6 && this.phoneNumber) {
            console.log("✅ ABA Data validation successful");
            return true;
        }
        console.log("❌ ABA Invalid data");
        return false;
    }

    pay(amount: number): boolean {
        this.amount = amount;
        if (this.validate()) {
            console.log(`💰 Paid via ABA ${amount} $ successfully!`);
            return true;
        }
        return false;
    }

    generateReceipt(): void {
        this.printHeader();
        console.log("Payment Type: ABA Payment");
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Phone Number  : ${this.phoneNumber}`);
        console.log(`Amount        : ${this.amount} $`);
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log(`Date & Time   : ${this.paymentDate}`);
        console.log("=========================================");
    }
}