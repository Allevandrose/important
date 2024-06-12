<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Interest Calculator</title>
<style>
  .results {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
</head>
<body>

<h2>Simple Interest Calculator</h2>

<form id="loanForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br>

  <label for="idNumber">ID Number:</label>
  <input type="text" id="idNumber" name="idNumber" required><br>

  <label for="loanAmount">Loan Amount:</label>
  <input type="number" id="loanAmount" name="loanAmount" required><br>

  <label>Interest Rate:</label><br>
  <input type="radio" id="rate5" name="interestRate" value="5" required>
  <label for="rate5">5%</label><br>

  <input type="radio" id="rate7" name="interestRate" value="7" required>
  <label for="rate7">7%</label><br>

  <input type="radio" id="rate10" name="interestRate" value="10" required>
  <label for="rate10">10%</label><br>

  <label for="period">Period:</label>
  <select id="period" name="period" required>
    <option value="1">1 year</option>
    <option value="2">2 years</option>
    <option value="3">3 years</option>
    <option value="4">4 years</option>
    <option value="5">5 years</option>
  </select><br>

  <input type="submit" value="Calculate">
</form>

<div class="results" id="results"></div>

<script>
document.getElementById('loanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form inputs
  var name = document.getElementById('name').value;
  var idNumber = document.getElementById('idNumber').value;
  var loanAmount = parseFloat(document.getElementById('loanAmount').value);
  var interestRate = parseFloat(document.querySelector('input[name="interestRate"]:checked').value);
  var period = parseInt(document.getElementById('period').value);

  // Calculate simple interest
  var interest = (loanAmount * (interestRate / 100) * period).toFixed(2);

  // Get current date
  var currentDate = new Date().toLocaleDateString();

  // Prepare result message
  var resultMessage = "Loan details for " + name + ", ID Number: " + idNumber + "<br>";
  resultMessage += "Loan Amount: $" + loanAmount.toFixed(2) + "<br>";
  resultMessage += "Interest Rate: " + interestRate + "%<br>";
  resultMessage += "Period: " + period + " years<br>";
  resultMessage += "Date of Loan Acquisition: " + currentDate + "<br>";
  resultMessage += "Simple Interest: $" + interest;

  // Display result
  document.getElementById('results').innerHTML = resultMessage;
});
</script>

</body>
</html>
