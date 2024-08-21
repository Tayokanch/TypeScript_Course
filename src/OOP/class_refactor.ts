const eplPlayers: string[] = [
    "Mohamed Salah",    // Liverpool
    "Kevin De Bruyne",  // Manchester City
    "Harry Kane",       // Tottenham Hotspur
    "Bruno Fernandes",   // Manchester United
    "Son Heung-min",    // Tottenham Hotspur
    "Virgil van Dijk",   // Liverpool
    "Sadio Mané",       // Al Nassr (Formerly Liverpool)
    "Ruben Dias",       // Manchester City
    "Jack Grealish",    // Manchester City
    "Raheem Sterling",   // Chelsea
    "N'Golo Kanté",     // Chelsea
    "Richarlison",      // Tottenham Hotspur
    "Alisson Becker",    // Liverpool
    "Jadon Sancho",      // Manchester United
    "Ederson",          // Manchester City
    "Marcus Rashford",   // Manchester United
    "Kieran Trippier",   // Newcastle United
    "Phil Foden",        // Manchester City
    "Gabriel Jesus",     // Arsenal
    "Martin Ødegaard",   // Arsenal
    "Bukayo Saka",       // Arsenal
    "Mason Mount",       // Manchester United
    "Dominic Calvert-Lewin", // Everton
    "James Maddison",    // Tottenham Hotspur
    "Declan Rice",       // Arsenal
    "César Azpilicueta",  // Chelsea
    "Thiago Silva",      // Chelsea
    "Ben Mee",           // Brentford
    "Aaron Ramsdale",    // Arsenal
    "Emile Smith Rowe",  // Arsenal
    "Wilfried Zaha"      // Crystal Palace
];
class Footballer {
  
    constructor (
        public name : string ,
        public position: string, 
        public height: string,
        private salary: number){}
   
        
        
    playerOfTheSeason(): string| undefined {

        if(eplPlayers.includes(this.name)){
            return `Congratulation ${this.name.toUpperCase()}! you've been nominated as one of the EPL player of the season`
        }
        return `Sorry ${this.name.toUpperCase()}, you have not been nominated for the EPL Player of the Season.`;

    }

    getSalary (): number{
        return this.salary;
    }

}

const Player1 = new Footballer( "Ruben Dias", "Forward", "5.7ft",  3450000)
const result = Player1.playerOfTheSeason();
console.log(result);