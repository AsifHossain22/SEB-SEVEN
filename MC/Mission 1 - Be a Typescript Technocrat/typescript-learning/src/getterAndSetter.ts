// GetterAndSetter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //     return this._userBalance = this._userBalance + balance;
  //   }

  // SetBalance
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  //   getBalance() {
  //     return this._userBalance;
  //   }

  // GetBalance
  get getBalance() {
    return this._userBalance;
  }
}

const MyBankAccount = new BankAccount(101, "Asif Hossain", 0);

// MyBankAccount.addBalance(300);
// MyBankAccount.addBalance(1000);

MyBankAccount.addBalance = 300;
MyBankAccount.addBalance = 1000;
console.log(MyBankAccount);
