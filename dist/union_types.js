"use strict";
const kgToLbs = (weight) => {
    if (typeof weight === 'number') {
        return weight * 3;
    }
    else {
        return parseInt(weight);
    }
};
console.log(kgToLbs(76));
console.log(kgToLbs('23'));
//# sourceMappingURL=union_types.js.map