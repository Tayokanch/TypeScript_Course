type Employee = {
    id : number,
    name: string,
    retire: Date
}


const tosin : Employee = {
    id : 43,
    name: "Olorundare Tosin",
    retire: new Date(1996, 5-1, 12)
}

const tayo : Employee = {
    id : 2,
    name: "Omotayo Quadri",
    retire: new Date(1994 , 12-1, 7)

}


console.log("This is Tayo's Birthday", tayo.retire)