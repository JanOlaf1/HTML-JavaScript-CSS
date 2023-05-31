
function play() {
		// Read value from the input field
		let bet = document.getElementById("bet").value;
		// Randomize dice pips between 1-6
		var pips = Math.round( (Math.random() * 5) + 1 );
		// Calculate win base on pips
		if (((pips == 1) || (pips == 3) || (pips == 5))){
document.getElementById("answer").innerHTML = "Pips was " + pips + " - no pay"
		} else if ((pips == 2) || (pips == 4)){
			bet = (bet * 1.25)
			document.getElementById("answer").innerHTML = "Pips was " + pips + " - paid back: " + bet.toFixed(2) + " euros" 
		} else{
			bet = (bet * 1.50)
			document.getElementById("answer").innerHTML = "Pips was " + pips + " - paid back: " + bet.toFixed(2) + " euros"
		}
		// Write the answer on the page, to the answer div, as content of the div

}
