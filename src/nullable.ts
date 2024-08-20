const greetings = (name: string | null) =>{
    if(name)
        return `Hola! ${name}`
    return "Hola Somebody"
}

console.log(greetings("Haneefah"));
console.log(greetings(null));