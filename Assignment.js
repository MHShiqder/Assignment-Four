

function calculateTax(income, expenses)
{
    if (income<0||expenses<0||expenses>income) {
        return "Invalid Input"
    }
    
    return (income-expenses)*.2;
}


function sendNotification(email) {
    if(!email.includes("@"))
        return "Invalid Email";

    let container=email.split("@");
    
    return container[0]+" sent you an email from "+container[1];
}



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




function calculateFinalScore(obj) {
    if(typeof obj !=="object"|| Array.isArray(obj))
    {
        return "Invalid Input";
    }

    let total=obj.testScore+obj.schoolGrade;
    
    if(obj.isFFamily)
        total+=20;

    if(total>=80)
        return true;

    return false;
}



function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number")
        return "Invalid Input";

    let sum=0,count=0;

    for(let time of waitingTimes)
    {
        sum+=time;
        count++;
    }
    
    let averageWaitingTime=Math.round(sum/count);

    return (serialNumber-count-1)*averageWaitingTime;
}
