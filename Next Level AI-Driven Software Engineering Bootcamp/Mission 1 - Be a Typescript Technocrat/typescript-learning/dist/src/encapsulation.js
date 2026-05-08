"use strict";
//* Encapsulation - OOP - 4
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    _userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
    addBalance(balance) {
        this._userBalance = this._userBalance + balance;
    }
    getAddBalance(balance) {
        this.addBalance(balance);
    }
}
const MyBankAccount = new BankAccount(101, "Asif Hossain", 0); // Instance
MyBankAccount.getAddBalance(300);
MyBankAccount.getAddBalance(1000);
console.log(MyBankAccount);
//# sourceMappingURL=encapsulation.js.map