"use strict";
const calculateTask = (income, taxYear) => {
    if (income < 50000 && taxYear < 2022)
        return income * 1.3;
    else {
        return income * 2.5;
    }
};
calculateTask(45000, 2010);
//# sourceMappingURL=function.js.map