"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("invalid amount");
        this.balance += amount;
        return amount;
    }
}
exports.Account = Account;
let account = new Account(1, "Tayo", 12);
console.log("This is the account balance:", account.balance);
console.log("This is the amount deposited:", account.deposit(348));
//# sourceMappingURL=classes.js.map