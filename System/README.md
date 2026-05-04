# Payment System - TypeScript

ប្រព័ន្ធទូទាត់លុយ គាំទ្រ ABA, Credit Card និង Cash

---

## 🌟 អំពីគម្រោង

គម្រោងនេះជាប្រព័ន្ធទូទាត់លុយដែលបង្ហាញពីការអនុវត្ត **OOP Concepts** យ៉ាងពេញលេញនៅក្នុង **TypeScript**។ រួមមាន៖

- Interface
- Abstract Class
- Inheritance
- Method Overriding
- Polymorphism

---

## ✨ លក្ខណៈពិសេស

- គាំទ្រទូទាត់ ៣ ប្រភេទ៖ **ABA**, **Credit Card**, **Cash**
- ការពិនិត្យសុពលភាព (`validate()`)
- បង្កើតបង្កាន់ដៃស្អាត (`generateReceipt()`)
- ប្រើ **Polymorphism** ដើម្បីគ្រប់គ្រងទូទាត់ទាំងអស់តាមរយៈ `Payment` Interface
- កូដស្អាត អានងាយ និងអាចពង្រីកបាន


រចនាសម្ព័ន្ធប្រព័ន្ធ

- Account (Abstract Class) →ថ្នាក់មេសម្រាប់គ្រប់ប្រភេទគណនី
- SavingsAccount & CheckingAccount → ថ្នាក់កូន
- Payment (Interface) → សម្រាប់ការទូទាត់
- OnlinePayment & CardPayment → អនុវត្ត Interface

---

## 📁 Folder Structure

```bash
PaymentSystem/
├── src/
│   ├── core/
│   │   ├── Payment.ts              # Interface
│   │   └── AbstractPayment.ts      # Abstract Class
│   ├── payments/
│   │   ├── ABAPayment.ts
│   │   ├── CreditCardPayment.ts
│   │   └── CashPayment.ts
│   └── main.ts                     # Entry point
├── dist/                           # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md







---

## 🛠️ របៀបដំណើរការ


### 1. ដំឡើងគម្រោង

```bash
git clone <your-repo-url>
cd PaymentSystem

npm install


🎉 ប្រព័ន្ធទូទាត់លុយ (TypeScript) សាកល្បង

🔄 កំពុងដំណើរការ...
✅ ABA ពិនិត្យទិន្នន័យត្រឹមត្រូវ
💰 ទូទាត់តាម ABA ចំនួន 150 $ រួចរាល់!
=========================================
          បង្កាន់ដៃទូទាត់លុយ
=========================================
...