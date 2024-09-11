

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {

        return "Invalid Input"

    }

    return (income - expenses) * .2;

}

