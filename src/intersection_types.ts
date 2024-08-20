type Draggable = {
    drag: () => void
}

type Resizible = {
    resize : () => void
}

type UIWidget = Draggable & Resizible;

let textBox: UIWidget = {
    drag : ()=> {},
    resize: ()=>{}
}


/* Example 2 */

type Person = {
    name : string,
    age : number,
}

type Address = {
    street : string,
    city : string,
    postCode: string
}

type MemberInformation = Person & Address

const member1 = {
    name : "Isiaq Balogun",
    age : 30,
    street: "Broadmoss Drive",
    city: " Manchester",
    PostCode: "M9 7HG"
}