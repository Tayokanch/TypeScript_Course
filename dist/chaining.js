"use strict";
const getCustomer = (id) => {
    return id == 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(0);
console.log("This is customer:", customer);
console.log("This is the customer's birthday:", customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=chaining.js.map