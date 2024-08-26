interface PProduct{
    name: string;
    price: number
}

type ReadOnlyProduct = {
    readonly [Key in keyof PProduct]: PProduct[Key]
}

let pproduct : ReadOnlyProduct = {
    name: " Bread",
    price: 2
}



///GENERIC TYPE MAPPING
/// GO TO (TyoeScript utility types on Google) to learn more and understand better
interface Contacts{
    phone: number;
    email: string;
    social_Media: String

}

