// Randomize the pips once
let pips1 = Math.round((Math.random() * 5) + 1);
let pips2 = Math.round((Math.random() * 5) + 1);
let rundit = 1;
// Set the count to be one (now you have randomized once)

// Repeat as long as (pips are not equal) 
 while (pips1 != pips2){

    // Randomize again
    let pips1 = Math.round((Math.random() * 5) + 1);
    let pips2 = Math.round((Math.random() * 5) + 1);
    rundit++;
 
    // Increment counter by one
    rundit++;
}

// Write the answer (including the count) to the html page (answer div)
document.getElementById("answer").innerHTML = "Same dice pips: " + pips1 + " and" + pips2 + "<br> There were " + rundit + "randomization rounds until we got the same pips.";