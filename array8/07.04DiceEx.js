function randomInteger(from, to) {
    // Return a random integer between 'from' and 'to'.
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  
  function rollTheDice() {
    // Call the function randomInteger(from, to) with parameter values 1 and 6.
    var diceValue = randomInteger(1, 6);
  
    // Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    document.getElementById("dice").innerHTML = diceValue;
  }
  