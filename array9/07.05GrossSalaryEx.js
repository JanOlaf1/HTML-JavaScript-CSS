function calculateSalary(hours, hourlySalary) {
    // calculate salary
    const grossSalary = hours * hourlySalary;

    // return the gross salary with the return statement
    return grossSalary;
}

function showGrossSalary() {
    // assign the input field value to the variable hours
    const hours = parseFloat(document.getElementById("hours").value);

    // assign the second input field value to the variable hourlySalary
    const hourlySalary = parseFloat(document.getElementById("hourlySalary").value);

    // call the calculateSalary function
    const palkka = calculateSalary(hours, hourlySalary);
	console.log(palkka);
    // write the answer on the html page
    const answerElement = document.getElementById("answer");
    answerElement.innerHTML = `Gross salary is ${palkka.toFixed(2)} euros.`;
}
