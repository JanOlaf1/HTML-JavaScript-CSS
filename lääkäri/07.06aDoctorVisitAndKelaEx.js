// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function calculateKelaReimbursement(length) {
	const parsedLength = parseInt(length);
	if (parsedLength <= 10) {
	  return 8.00;
	} else if (parsedLength <= 20) {
	  return 11.00;
	} else if (parsedLength <= 30) {
	  return 13.50;
	} else if (parsedLength <= 45) {
	  return 16.50;
	} else {
	  return 21.00;
	}
  }
  
  // Define a function (3.) that is called when the button is clicked.
  function calculate() {
	// Read values from the input fields
	const lengthInput = document.getElementById("length");
	const doctorsFeeInput = document.getElementById("doctorsFee");
	const length = lengthInput.value;
	const doctorsFee = doctorsFeeInput.value;
  
	// Call the function (1.) which calculates and returns Kela reimbursement 
	const kelaReimbursement = calculateKelaReimbursement(length);
  
	// Calculate the total reimbursement
	const totalReimbursement = kelaReimbursement > doctorsFee ? doctorsFee : kelaReimbursement;
  
	// Write the answer on the page, to the answer div, as content of the div
	const answerDiv = document.getElementById("answer");
	answerDiv.innerHTML = "Length of visit is " + length +  "minutes. <br> Kela reimbursement is " + totalReimbursement.toFixed(2) + " euros.";
  }
  