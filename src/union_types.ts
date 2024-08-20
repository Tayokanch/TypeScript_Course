const kgToLbs = (weight : number | string) : number =>{
    if(typeof weight === 'number' ){
        return weight * 3
    }
   
    else{
        return parseInt(weight)
    }
}

console.log(kgToLbs(76))
console.log(kgToLbs('23'))