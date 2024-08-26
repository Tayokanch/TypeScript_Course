/* 
    Generic Classes are used in a case where by we have a class 
    that takes a particular contructor type e.g  constructor(public key : string, public value: number )
    if I want to create a new instance with my class and change the type of key to either number 
    or change the type of (value) to string, this wont be possible

    THIS IS WHERE GENERIC TYPES COMES TO ACTION
 */



    class KeyValuePair<K, V>{
        constructor(public key : K, public value: V){}
    }

    let pair1 = new KeyValuePair("amount", 8972)
    let pair2 = new KeyValuePair([1,2,3,4,5], {name: "Tayo", age: 23})




    interface NewProduct {
        name: string;
        price: number
    }
    
    class Store <T>{
        private _objects: T[] = []

        add(obj: T): void{
            this._objects.push(obj)
        }
    }


    class CompressibleStore <T> extends Store <T>{
        compress (){}
    };
    let newStore = new CompressibleStore<NewProduct>()
