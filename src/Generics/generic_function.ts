class ArrayUtils{
    static wrapInArray <T>(value: T){
        return [value];
    }    
}

let numbers = ArrayUtils.wrapInArray(45)


// NOTE: Using the keyword static, you do not need to create a new instance of ArrayUtils