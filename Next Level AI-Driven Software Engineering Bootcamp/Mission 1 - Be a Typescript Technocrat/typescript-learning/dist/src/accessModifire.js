"use strict";
// AccessModifier
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    //   private userBalance: number;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance) {
        this.userBalance = this.userBalance + balance;
    }
}
class MyBankAccountII extends BankAccount {
    test() {
        this.userBalance;
    }
}
const MyBankAccount = new BankAccount(101, "Asif Hossain", 0);
MyBankAccount.addBalance(300);
MyBankAccount.addBalance(1500);
console.log(MyBankAccount);
//# sourceMappingURL=accessModifire.js.map