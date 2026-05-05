// AccessModifier

class BankAccount {
  public readonly userId: number;
  public userName: string;
  //   private userBalance: number;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
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
