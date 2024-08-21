"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    get myBalance() {
        return this.balance;
    }
    set myBalance(value) {
        if (value < 0) {
            throw new Error("Invalid Value");
        }
        this.balance = value;
    }
}
let account = new Account(4, "Teni", 327);
console.log(`This is the balance we got using the setter: ${account.myBalance}`);
let ownerBalance = account.myBalance;
//# sourceMappingURL=getter_setter.js.map