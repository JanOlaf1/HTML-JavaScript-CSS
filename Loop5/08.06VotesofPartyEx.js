function showComparisonScores() {
	let votes = parseInt(document.getElementById("votes").value);
	let candidates = parseInt(document.getElementById("candidates").value);
	const tulos = [];
  
	for (let i = 1; i <= candidates; i++) {
	  const score = votes / i;
	  tulos.push(i + ". candidate: " + score.toFixed(0));
	}
  
	console.log(candidates);
	console.log(votes);
	console.log(tulos);
  
	document.getElementById("answer").innerHTML = tulos.join("<br>");
  }