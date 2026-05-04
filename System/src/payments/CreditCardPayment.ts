// src/payments/CreditCardPayment.ts
import { AbstractPayment } from "../core/AbstractPayment";

export class CreditCardPayment extends AbstractPayment {
    private cardNumber: string;
    private expiryDate: string;
    private cvv: string;

    constructor(cardNumber: string, expiryDate: string, cvv: string) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    validate(): boolean {
        if (this.cardNumber.length >= 13 && this.cvv.length === 3) {
            console.log("✅ Credit Card Data validation successful");
            return true;
        }
        console.log("❌ Credit Card Invalid data");
        return false;
    }

    pay(amount: number): boolean {
        this.amount = amount;
        if (this.validate()) {
            console.log(`💳 Paid via Credit Card ${amount} $ successfully!`);
            return true;
        }
        return false;
    }

    generateReceipt(): void {
        this.printHeader();
        console.log("Payment Type: Credit Card");
        console.log(`Card Number   : **** **** **** ${this.cardNumber.slice(-4)}`);
        console.log(`Expiry Date   : ${this.expiryDate}`);
        console.log(`Amount        : ${this.amount} $`);
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log("=========================================");
    }
}