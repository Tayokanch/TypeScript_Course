 export class Account{
    readonly id: number;
    owner: string;
    balance: number;


    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }   

    deposit (amount : number): number {
        if( amount <= 0)
            throw new Error ("invalid amount");
        this.balance += amount;
        return amount
    }
}

let account = new Account(1, "Tayo", 12)
console.log("This is the account balance:",account.balance);
console.log("This is the amount deposited:",  account.deposit(348))