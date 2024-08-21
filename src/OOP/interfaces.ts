interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalender extends Calender{
    sync(): void
}

class GoogleCalender implements Calender{
    constructor(public name:string){}

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
    
}


/* Diff btw Types and Interface:

It’s more conventional to use an interface in front of the extends keyword. 

*/