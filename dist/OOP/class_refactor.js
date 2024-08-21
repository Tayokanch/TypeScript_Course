"use strict";
const eplPlayers = [
    "Mohamed Salah",
    "Kevin De Bruyne",
    "Harry Kane",
    "Bruno Fernandes",
    "Son Heung-min",
    "Virgil van Dijk",
    "Sadio Mané",
    "Ruben Dias",
    "Jack Grealish",
    "Raheem Sterling",
    "N'Golo Kanté",
    "Richarlison",
    "Alisson Becker",
    "Jadon Sancho",
    "Ederson",
    "Marcus Rashford",
    "Kieran Trippier",
    "Phil Foden",
    "Gabriel Jesus",
    "Martin Ødegaard",
    "Bukayo Saka",
    "Mason Mount",
    "Dominic Calvert-Lewin",
    "James Maddison",
    "Declan Rice",
    "César Azpilicueta",
    "Thiago Silva",
    "Ben Mee",
    "Aaron Ramsdale",
    "Emile Smith Rowe",
    "Wilfried Zaha"
];
class Footballer {
    constructor(name, position, height, salary) {
        this.name = name;
        this.position = position;
        this.height = height;
        this.salary = salary;
    }
    playerOfTheSeason() {
        if (eplPlayers.includes(this.name)) {
            return `Congratulation ${this.name.toUpperCase()}! you've been nominated as one of the EPL player of the season`;
        }
        return `Sorry ${this.name.toUpperCase()}, you have not been nominated for the EPL Player of the Season.`;
    }
    getSalary() {
        return this.salary;
    }
}
const Player1 = new Footballer("Ruben Dias", "Forward", "5.7ft", 3450000);
const result = Player1.playerOfTheSeason();
console.log(result);
//# sourceMappingURL=class_refactor.js.map