import { Member } from "./inheritance";
import { Student } from "./inheritance";
import { Teacher } from "./inheritance";
function printNames(people: Member[]){
    for(let person of people){
        console.log(person.fullName)
    }
}

printNames([
    new Student(1, "tofunmi", "james"),
    new Teacher( "Tope", "Shobayo")
])