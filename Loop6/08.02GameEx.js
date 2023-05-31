function calculateProfit() {
    // Read value of rounds from the input field
    let rounds = parseInt(document.getElementById("rounds").value);
  
    // Initialize variables
    let bets = rounds; // Each round costs 1 euro
    let winCounter = 0;
    let totalWins = 0;
  
    // Loop through the rounds
    for (let i = 0; i < rounds; i++) {
      // Randomize pips between 1-6
      let pips = Math.round((Math.random() * 5) + 1);
  
      // Check the pips and calculate the pay
      let pay = 0;
      if (pips === 2 || pips === 4) {
        pay = 1.25; // 125% payback
      } else if (pips === 6) {
        pay = 1.5; // 150% payback
      }
  
      // Add the pay to the win counter and total wins
      winCounter += pay;
      totalWins += pay > 0 ? 1 : 0;
    }
  
    // Calculate the wins and profit
    let wins = winCounter - bets;
    let profit = wins.toFixed(2);
  
    // Write the answer on the page
    let result = `Bets: ${bets} euros<br>Wins: ${winCounter.toFixed(2)} euros (${totalWins} rounds)<br>Profit: ${profit} euros`;
    document.getElementById("answer").innerHTML = result;
  }