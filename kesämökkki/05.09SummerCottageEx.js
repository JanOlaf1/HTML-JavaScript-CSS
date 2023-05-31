function calculateRent() {
		var rent  = document.getElementById("rent").value; 
		var participants = document.getElementById("participants").value;
		 // TODO
		 calculateRent = rent / participants;
		 document.getElementById("answerDiv").innerHTML = "Rent per participants is " + calculateRent.toFixed(2) + " euros.";
console.log(calculateRent)
}