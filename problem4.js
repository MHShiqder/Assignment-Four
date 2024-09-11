

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

