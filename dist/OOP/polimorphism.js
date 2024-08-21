"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = require("./inheritance");
const inheritance_2 = require("./inheritance");
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new inheritance_1.Student(1, "tofunmi", "james"),
    new inheritance_2.Teacher("Tope", "Shobayo")
]);
//# sourceMappingURL=polimorphism.js.map