"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPayment = void 0;
class AbstractPayment {
    constructor() {
        this.amount = 0;
        this.transactionId = `TXN-${Date.now()}`;
        this.paymentDate = new Date().toLocaleString('en-US');
    }
    printHeader() {
        console.log("=========================================");
        console.log("          PAYMENT RECEIPT          ");
        console.log("=========================================");
    }
}
exports.AbstractPayment = AbstractPayment;
