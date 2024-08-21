"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Student = exports.Member = void 0;
class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walking");
    }
}
exports.Member = Member;
class Student extends Member {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
exports.Student = Student;
class Teacher extends Member {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
exports.Teacher = Teacher;
let teacher = new Teacher("John", "Doe");
console.log("This is the Teacher", teacher);
let student = new Student(3, "Haneefat", "Saka");
console.log("This is the student name:", student);
console.log("This is the Teacher's full name:", teacher.fullName);
//# sourceMappingURL=inheritance.js.map