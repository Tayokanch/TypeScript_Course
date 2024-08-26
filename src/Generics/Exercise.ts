// Convert the function below to a generic function

function echo(arg) {
    return arg
}

function echo <T>(arg: T) : T{
    return arg
}



//When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. 
//How can we solve this problem?


/* function printName <T>(obj:T): T{
    console.log(obj.name);
}
 */
interface Name {
    name: string
}

function printName <T extends Name>(obj:T): T{
    console.log(obj.name);
    return obj
}




/* 
    An Entity should have a unique identifier. The type of identifier,
     however, is dependent on the use case. In some cases, 
     the ID might be a number, in other cases, it might be a string, GUID,
      etc. Represent the entity using a generic class. 

*/


class Indentifier <T extends | number | string>{
    constructor(public Id: T) {}
}

let indentifier1 = new Indentifier ("dmsdkksdklsdklsdsdkl");
let indentifier2 = new Indentifier(32)


///Given the following interface, what does keyof Users return ?

interface Users{
    userId : number;
    username: string;
}

//userId
//username

