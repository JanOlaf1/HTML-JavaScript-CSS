// The array variable names is declared inside the script element, but NOT inside the function. 
// The array is availabe for both functions to read from or write to.
let names = [];

function addName() {
    // Assign name from the input field to the array (use push())
    let name = document.getElementById("name").value.trim();
    if (name) {
        names.push(name);
    }
    
    // Go through the array in a for loop adding each name at the end of the namesText
    let namesText = "";
    for (let i = 0; i < names.length; i++) {
        namesText += names[i] + " ";

    }
    
    // Write the names on the page, to the names div, as content of the div
    document.getElementById("nameList").innerHTML = "Inserted names: " + namesText.slice(0, -1);
    
    // Empty the input field of name as that name was just put in the array
    document.getElementById("name").value = "";

    // Empty the answer text
    document.getElementById("answer").innerHTML = "";
}

function makeDraw() {
    if (names.length === 0) {
        alert("Please enter at least one name!");
        return;
    }

    // Randomize the index of the winner
    let winnerIndex = Math.floor(Math.random() * names.length);
    let voittaja = names[winnerIndex];
    
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = "<br>Winner is " + voittaja;
}
