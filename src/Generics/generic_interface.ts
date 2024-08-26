//http:mywebsite.com/users
//http:mywebsite.com/products


interface Result <T>{
    data: T | null,
    error: string | null
}


function fetchh<T>(url: string): Result<T>{
    return {data: null, error: null};
}

interface Userr {
    userName:string;
}

interface Product{
    title: string;
}


let userResult = fetchh<Userr>("url/user.com")
let useProduct = fetchh<Product>("url/product.com")