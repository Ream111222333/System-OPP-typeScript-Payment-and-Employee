"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
// src/payments/CreditCardPayment.ts
const AbstractPayment_1 = require("../core/AbstractPayment");
class CreditCardPayment extends AbstractPayment_1.AbstractPayment {
    constructor(cardNumber, expiryDate, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }
    validate() {
        if (this.cardNumber.length >= 13 && this.cvv.length === 3) {
            console.log("✅ Credit Card Data validation successful");
            return true;
        }
        console.log("❌ Credit Card Invalid data");
        return false;
    }
    pay(amount) {
        this.amount = amount;
        if (this.validate()) {
            console.log(`💳 Paid via Credit Card ${amount} $ successfully!`);
            return true;
        }
        return false;
    }
    generateReceipt() {
        this.printHeader();
        console.log("Payment Type: Credit Card");
        console.log(`Card Number   : **** **** **** ${this.cardNumber.slice(-4)}`);
        console.log(`Expiry Date   : ${this.expiryDate}`);
        console.log(`Amount        : ${this.amount} $`);
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log("=========================================");
    }
}
exports.CreditCardPayment = CreditCardPayment;
