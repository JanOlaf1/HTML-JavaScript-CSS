function showStudyGrant() {
        // Read values from the input fields
		let age = document.getElementById("age").value;
	let withParents = document.getElementById("withParents").value;
		// if student is living with parents and his/her age is greater than 20 or equal
		if ((age >= 20) && (withParents == "y")){
		      //assign text "The study grant is 335.20 euros." to a variable
			  document.getElementById("answer").innerHTML = "The study grant is 87.23 - 196.27 euros."
		
		//otherwise if ....
		} else if ((age >= 20) && (withParents == "n")){
			document.getElementById("answer").innerHTML = "The study grant is 268.23 euros."
		} else{
			document.getElementById("answer").innerHTML = "Ask kela."
		}
		// Write the answer on the page, to the answer div, as content of the div
		
}
	