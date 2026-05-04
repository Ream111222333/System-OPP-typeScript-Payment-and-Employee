"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashPayment = void 0;
// src/payments/CashPayment.ts
const AbstractPayment_1 = require("../core/AbstractPayment");
class CashPayment extends AbstractPayment_1.AbstractPayment {
    constructor(moneyGiven) {
        super();
        this.change = 0;
        this.moneyGiven = moneyGiven;
    }
    validate() {
        console.log("✅ Cash Data validation successful");
        return true;
    }
    pay(amount) {
        this.amount = amount;
        if (this.moneyGiven >= amount) {
            this.change = this.moneyGiven - amount;
            console.log(`💵 Paid via Cash ${amount} $ successfully!`);
            return true;
        }
        else {
            console.log("❌ Insufficient funds!");
            return false;
        }
    }
    getChange() {
        return this.change;
    }
    generateReceipt() {
        this.printHeader();
        console.log("Payment Type: Cash Payment");
        console.log(`Cash Given    : ${this.moneyGiven} $`);
        console.log(`Total Amount  : ${this.amount} $`);
        console.log(`Change        : ${this.change} $`);
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log("=========================================");
    }
}
exports.CashPayment = CashPayment;
