// Function to calculate the price of repair work
function calculate() {
    // Read date text from the input field
    var dateText = document.getElementById("date").value;
  
    // If it is not Sunday (Call isSunday() function with a date text as a parameter)
    if (!isSunday(dateText)) {
      // Show price of the repair work per hour during the workdays
      document.getElementById("answer").innerHTML = "<p>Date 30.04.2020 (work day).<br>The price of this repair work is  48 euros per hour.</p>";
    } else {
      // Show price of the repair work per hour on Sundays
      document.getElementById("answer").innerHTML = "The price of this repair work is 72 euros per hour on Sundays.";
    }
  }
  
  // The function gets the date text in the format "dd.MM.yyyy".
  // The function returns Boolean value true if the date is for a Sunday, otherwise false.
  function isSunday(dateText) {
    // Split the given dateText into day, month and year parts using the substr() method
    var day = parseInt(dateText.substr(0, 2), 10);
    var month = parseInt(dateText.substr(3, 2), 10) - 1; // Month is zero-based in JavaScript
    var year = parseInt(dateText.substr(6, 4), 10);
  
    // Create a new Date object to a variable
    var date = new Date(year, month, day);
  
    // Get the day of the week with its getDay() method. Sunday is number 0.
    var dayOfWeek = date.getDay();
  
    // If day of the week is Sunday
    if (dayOfWeek === 0) {
      // Return Boolean value true
      return true;
    } else {
      // Return Boolean value false
      return false;
    }
  }
  