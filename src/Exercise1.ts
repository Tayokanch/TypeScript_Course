// Given the Data below, define a type alias for the representing users

type User = {
    name: string,
    age: number,
    occupation?: string

}

let users : User[] = [
    { name: "Jonh Smith",
      age: 30,
      occupation: "software engineer"  
    },

    {
        name : "kate Muller",
        age:  28
    }
]

//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these 

type Bird = {
    fly : () => void
}

type Fish = {
    swim : ()=> void
}

type Pet = Bird | Fish


//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,  etc

type DaysOfTheWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
const visitingDay : DaysOfTheWeek = "Tuesday"