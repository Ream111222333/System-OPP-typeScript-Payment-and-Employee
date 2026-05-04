"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPayment = void 0;
// src/payments/ABAPayment.ts
const AbstractPayment_1 = require("../core/AbstractPayment");
class ABAPayment extends AbstractPayment_1.AbstractPayment {
    constructor(accountNumber, phoneNumber) {
        super();
        this.accountNumber = accountNumber;
        this.phoneNumber = phoneNumber;
    }
    validate() {
        if (this.accountNumber.length >= 6 && this.phoneNumber) {
            console.log("✅ ABA Data validation successful");
            return true;
        }
        console.log("❌ ABA Invalid data");
        return false;
    }
    pay(amount) {
        this.amount = amount;
        if (this.validate()) {
            console.log(`💰 Paid via ABA ${amount} $ successfully!`);
            return true;
        }
        return false;
    }
    generateReceipt() {
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
exports.ABAPayment = ABAPayment;
