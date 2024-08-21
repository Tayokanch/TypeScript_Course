/* Abstract is a process whereby we dont want new instance of a class to be created */

abstract class Shape {
    constructor(public color: string){}

   abstract render(): void
}

class Circle extends Shape{
    constructor(public radius: number , color: string){
        super(color)
    }

    override render(): void {
        console.log("Rendering a circle")
    }
}

//This is not possible because Shape is an Abstract class
//let shape = new Shape("red")

//Note Abstract method can only be found in an abstract class