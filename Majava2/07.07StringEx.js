function processName() {

    // read value of name from the input field
   var name = document.getElementById("name").value;

    // show it with "ALL CAPS" using toUpperCase()
   var iso = document.getElementById("upperCase");
   iso.innerHTML = "With upper case letters: " + name.toUpperCase();

    // show it with  "all small letters" using toLowerCase()
 
var pieni = document.getElementById("lowerCase");
pieni.innerHTML = "with lower case letters: " + name.toLowerCase();
    //tell how many characters are there (length, includes also all spaces) 
var length = document.getElementById("length");
length.innerHTML = "Character count: " + name.length;

    // tell, whether the input string contains the word 'muumi'
    var muumi = document.getElementById("contains")
    if (name.indexOf("muumi") !== -1){
        muumi.innerHTML = "Contains the text muumi.";
    } else { 
        muumi.innerHTML = "Doesn't contain the text muumi.";
    }
    // tell the first character using charAt()
    var firstCharacter = document.getElementById("firstCharacter");
    firstCharacter.innerHTML = "First character: " + name.charAt(0);

    // tell which ones are the first three characters using substring().
   var manyCharacters = document.getElementById("manyCharacters");
   manyCharacters.innerHTML = "First three characters: " + name.substring(0, 3);
}