/* Inheritance is used when two classes has almost same value and we want to
    try and avoid repitition
*/

export class Member{
    constructor(public firstName: string, public lastName: string){

    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    walk(){
        console.log("Walking")
    }
}

export class Student extends Member{
    constructor(public studentId: number, firstName: string, lastName: string ){
        super(firstName, lastName)
    }

    takeTest(){
        console.log("Taking a test")
    }
}


export class Teacher extends Member {

    override get fullName(){
        return `Professor ${super.fullName}` 
    }

}

let teacher = new Teacher("John", "Doe")
console.log("This is the Teacher", teacher)


let student = new Student(3, "Haneefat", "Saka");
console.log("This is the student name:", student)

console.log("This is the Teacher's full name:", teacher.fullName)
