let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];
function showResults (){
		// Sort the array
		minigolf.sort((a, b) => a - b);
		
		// Get the smallest and biggest results
		let pienin = minigolf[0];
		let isoin = minigolf[minigolf.length - 1];
		document.getElementById("answer").innerHTML = "The smallest result is " + pienin + " (winner)." + "<br> The biggest result is "  + isoin + ".";
}