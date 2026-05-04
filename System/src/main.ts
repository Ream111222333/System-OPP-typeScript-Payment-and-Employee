// src/main.ts
import { Payment } from "./core/Payment";
import { ABAPayment } from "./payments/ABAPayment";
import { CreditCardPayment } from "./payments/CreditCardPayment";
import { CashPayment } from "./payments/CashPayment";

function main() {
    console.log("Example Output\n");

    // Test ABA payment
    console.log("Processing ABA payment...");
    const abaPayment = new ABAPayment("123456789", "012 345 678");
    if (abaPayment.pay(150)) {
        console.log("Payment successful!");
    } else {
        console.log("Payment failed!");
    }

    // Test Credit Card payment with invalid card
    console.log("\nProcessing Credit Card payment...");
    const creditCardPayment = new CreditCardPayment("123", "12/28", "123"); // Invalid card number
    if (creditCardPayment.pay(150)) {
        console.log("Payment successful!");
    } else {
        console.log("Invalid card number!");
    }

    // Test Cash payment
    console.log("\nProcessing Cash payment...");
    const cashPayment = new CashPayment(155); // 155 - 150 = 5 change
    if (cashPayment.pay(150)) {
        console.log(`Change returned: $${cashPayment.getChange()}`);
    } else {
        console.log("Payment failed!");
    }
}

// Run the program
main();