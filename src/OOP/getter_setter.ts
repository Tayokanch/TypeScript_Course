 class Account{

    constructor(public id: number, public owner: string, private balance: number){
 
    }   
    
    get myBalance(): number{
        return this.balance
    }

    set myBalance(value: number){
        if(value< 0){
            throw new Error ("Invalid Value")
        }
        this.balance = value
    }

}

let account = new Account(4, "Teni", 327);

console.log(`This is the balance we got using the setter: ${account.myBalance}`)

//NOTE if not for the setter, we would have called myBalance as a function