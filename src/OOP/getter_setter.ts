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

/* NOTE: without Getter and Setter we can have access to the private balance, 
    and if we want to get the balance through myBalance method, 
    we would have called myBalance as a function
USE CASE:
    Setter and Getter are used to get the variable of a class set as private
    And also, they let use have access to a private variable of a class outside the classblock
    e.g */

let ownerBalance = account.myBalance