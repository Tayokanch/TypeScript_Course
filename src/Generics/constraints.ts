//<T> this meams the echo function is a genberic type
// Constraint Generic is a way of restricting the generic type to some specific types
//E.G

/* 
function echo <T> (value: T ): T{
    return value
}

In this generic function, echo can take any arguement
echo(3)
echo("Hello world")
echo({})

*/


// However for Constraint generic we can restrict how function to the type of arguement or data type we want it to accept
// E.g


function echo <T extends boolean | number> (value: T ): T{
    return value
}
echo(true)
echo(32)

//in the example above the function echo can only accept
//arguement of type boolean or number


// We can also construct the kind of (Generic types) we want 

interface Persondata {name: string, age: number}
const printInformation = <T extends Persondata> (data: T) : T=>{
    return (data)
}

printInformation({name: "tayo", age: 38})


/* 
    NOTE:
    - A GENERIC CLASS OR FUNCTION, LET YOU ACCEPT ANY TYPE ARGUEMENT OR VALUE
    - HOWEVER, WHEN IT IS A CONSTRAINT GENERIC YOU CAN RESTRICT THE 
      TYPE ARGUEMENT OR VALUE TO ANY TYPE YOU WANT INSTEAD OF MAKING IT AND OPEN TYPE OR OPTION 
*/


