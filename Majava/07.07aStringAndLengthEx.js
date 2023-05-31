function processName() {
    // read value of name from the input field
    var nimi = document.getElementById("name").value;
  
    // show it with "ALL CAPS" using toUpperCase()
    var iso = document.getElementById("upperCase");
    iso.innerHTML = "With upper case letters: " + nimi.toUpperCase();
  
    // show it with "all small letters" using toLowerCase()
    var pieni = document.getElementById("lowerCase");
    pieni.innerHTML = "With lower case letters: " + nimi.toLowerCase();
  
    // tell how many characters are there (length, includes also all spaces) 
    var pituus = document.getElementById("length");
    pituus.innerHTML = "Character count: " + nimi.length;
  }
  