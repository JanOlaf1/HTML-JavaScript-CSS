function tellInfractionFine() {
	let drivingSpeed = document.getElementById("drivingSpeed").value;
	let speedLimit = document.getElementById("speedLimit").value;
	let rikesakko = speedLimit + 15;
	let paivasakko = speedLimit + 20;
	let ero = drivingSpeed - speedLimit;
	// TODO
	
	if (ero >= 20) {
		document.getElementById("answer").innerHTML = "Income-based unit fine."
	} else if ( ero <= 0){
		document.getElementById("answer").innerHTML = "No speeding, no fine."
	}
	 else {
		if (speedLimit >= 10 && speedLimit <= 60) {
			if (ero <= 15 ){
				document.getElementById("answer").innerHTML = "Infraction fine is 85 euros."
		} else if ( ero > 15) {
			document.getElementById("answer").innerHTML = "Infraction fine is 115 euros."
		}
	} else if (speedLimit > 70 && speedLimit <= 120 ) {
		if (ero <= 15) {
			document.getElementById("answer").innerHTML = "Infraction fine is 70 euros."
		} else if ( ero > 15) {
			document.getElementById("answer").innerHTML = "Infraction fine is 100 euros."
		}
}
}}