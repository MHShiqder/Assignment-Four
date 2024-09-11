
function sendNotification(email) {
    if(!email.includes("@"))
        return "Invalid Email";

    let container=email.split("@");
    
    return container[0]+" sent you an email from "+container[1];
}

