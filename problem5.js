

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
