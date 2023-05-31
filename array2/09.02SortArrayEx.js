let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

// sort the array in reverse alphabetical order
function sortArray (){
array.sort().reverse();

// display each element value on a separate line in the console
array.forEach(function(element) {
  console.log(element);
});
}
