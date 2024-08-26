/* 
    Define a class called Logger that takes the name of a file in its constructor 
    and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. 
    Just define the class with the right members. 
*/

class Logger {
    constructor(public fileName: string){}

    sendMessage(message: string): void{
        console.log(`Writting to ${this.fileName} that: ${message}`)
    }
}

const logger = new Logger("menu.txt")
logger.sendMessage("I want to order a cup of wine")



/* 
    Given the Person class below, 
    create a getter for getting the full name of a person.
*/

class Persson{
    constructor(public firstName: string, public lastName: string){}
}

class MyEmployee extends Persson {
    constructor(public salary:string, firstName: string, lastName: string){
        super( firstName, lastName)
    }
   
}


// Given the data below, define an interface for representing employees: 

let employee : EmployeeInfo = {
    name:'John Smith',
    salary:50_000,
    address:{street:'Flinders st',city:'Melbourne',zipCode:3144,}
};


interface EmployeeInterFace {
    name: string ;
    salary: number;
 
}

interface AddressInterface {
    address: {
        street: string,
        city: string,
        zipCode: 3144
    }

}

interface EmployeeInfo extends EmployeeInterFace , AddressInterface {}