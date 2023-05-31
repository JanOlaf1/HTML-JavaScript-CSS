// Define a function (1.) 
function kela(tapaamisaik) {
	let palkkio = 0;
	const tapaamisaikNum = parseInt(tapaamisaik);
	if (tapaamisaikNum <= 10) {
	  palkkio = 8.00;
	} else if (tapaamisaikNum <= 20){
	  palkkio = 11.00;
	} else if (tapaamisaikNum <= 30){
	  palkkio = 13.50;
	} else if (tapaamisaikNum <= 45) {
	  palkkio = 16.50;
	} else {
	  palkkio = 21.00;
	}
	return palkkio;
  }
  
  // Define a function (2.) 
  function maara(laakpalkkio, maxpalkkio) {
	const laakpalkkioNum = parseFloat(laakpalkkio);
	const maxpalkkioNum = parseFloat(maxpalkkio);
	const officemaksu = 15.90;
	const totalcost = laakpalkkioNum + officemaksu;
	const kela = Math.min(maxpalkkioNum, totalcost);
	const amountLeft = (totalcost - kela).toFixed(2);
	return amountLeft;
  }
  
  // Define a function (3.) 
function calculate() {
	// Read values from the input fields
	const tapaamisaik = document.getElementById("length").value;
	const laakpalkkio = parseFloat(document.getElementById("doctorsFee").value);
	
	// Call the function (1.) which calculates Kela reimbursement 
	const maxpalkkio = kela(tapaamisaik);
	// Call the function (2.) which calculates amount left for the customer to pay
	const amountLeft = maara(laakpalkkio, maxpalkkio);
	// Write the answer on the page, to the answer div, as content of the div
	const answerDiv = document.getElementById("answer");
	answerDiv.innerHTML = "Doctor's Fee is " + laakpalkkio.toFixed(2) + " euros. <br>" +
	  "Kela reimbursement is " + maxpalkkio.toFixed(2) + " euros. <br>" +
	  " Office Fee is 15.90 euros. <br>" +
	  "Customer needs to pay " + amountLeft + " euros.";
  }
  
  