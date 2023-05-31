function calculateBMI() {
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
BMI = weight / ((height / 100.0) * (height / 100.0));
let result;
  //TODO
		if (BMI < 18.4) {
      result = "Weight less than normal weight";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
    result = "Normal weight"
} else {
  result = "Overweight"
}
document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (" + result + ")"
}
