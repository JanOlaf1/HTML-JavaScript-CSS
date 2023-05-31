function checkAge() {
		// assign the age input field value into a variable
		let age = document.getElementById("age").value;
		let checkAge;
		//if age smaller than 18
		if (age < 18) {

			// assign text "Adolescents are not allowed to play." to a variable
			checkAge = "Adolescents are not allowed to play."
		}
		// otherwise 
		else {
		
			// assign text "Old enough to play." to a variable  
			checkAge = "Old enough to play."
		}
		document.getElementById("answer").innerHTML = checkAge;
		console.log(checkAge)
		}
		
		// Write the answer to the web page DOM, in the answer div, as the content
		
