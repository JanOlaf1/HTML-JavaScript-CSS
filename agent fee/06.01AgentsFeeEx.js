function calculateFee() {
		
	// Read value from the input field
		let price = document.getElementById("price").value;

	// Calculate fee, save the result to a variable
		fee = ((price / 100) * 3.44);
		
		
	// if the fee is under minimum, update it
	if (fee < 2400) {
		fee = 2400
		console.log(fee);
	}

	// Write the answer on the page, to the fee div, as content of the div
		document.getElementById("fee").innerHTML = "Real state agent's fee is " + fee.toFixed(2) + " euros"
}