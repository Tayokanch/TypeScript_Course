type Customer = {
    birthday : Date
}
const getCustomer = (id: number) : Customer | null | undefined =>{
    return id == 0 ? null : {birthday: new Date ()}
}

let customer = getCustomer(0)

console.log("This is customer:",customer);
console.log("This is the customer's birthday:",customer?.birthday);