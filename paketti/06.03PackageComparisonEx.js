function comparePackages() {
	
		// assign input field values into a variables
		let textMessages = document.getElementById("textMessages").value;
		let callTime = document.getElementById("callTime").value;
		let allpackage = 29.90;
		let spackage;
		// calculate the costs of the Special Package
		spackage = (textMessages * 0.069) + (callTime * 0.069) + 19.90;

		// If the Special package is cheaper than the All-inclusive package 
		if (allpackage > spackage) {
	
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
					document.getElementById("answer").innerHTML = "The Special package (" + spackage.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)"
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
		} else {
			document.getElementById("answer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package (" + spackage.toFixed(2) + ")"		// write the answer to the web page DOM, in the answer div, as the content
		}
		
}