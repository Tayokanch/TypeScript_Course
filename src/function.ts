const calculateTask= (income:number, taxYear: number): number=>{
    if(income < 50000 && taxYear < 2022)
        return income * 1.3
    else{
        return income * 2.5

    }
}

calculateTask(45000, 2010)
