//* Encapsulation - OOP - 4

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  getAddBalance(balance: number) {
    this.addBalance(balance);
  }
}

const MyBankAccount = new BankAccount(101, "Asif Hossain", 0); // Instance

MyBankAccount.getAddBalance(300);
MyBankAccount.getAddBalance(1000);
console.log(MyBankAccount);
