

function checkDigitsInName(name) {
    if(typeof name!== "string")
        return "Invalid Input";

    let container=['1','2','3','4','5','6','7','8','9','0'];

    for(let i=0;i<name.length;i++)
    {
        if(container.includes(name[i]))
            return true;
    }
    
    return false;
}


