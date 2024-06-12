 document.getElementById('loanForm').addEventListener/*this is a Method*/('submit', function (event) {
            /*this is a method*/event.preventDefault();

            // Get form inputs
            var name = document.getElementById('name').value;
            var idNumber = document.getElementById('idNumber').value;
            var loanAmount = parseFloat(document.getElementById('loanAmount').value);
            var interestRate = parseFloat(document.querySelector('input[name="interestRate"]:checked').value);
            var period = parseInt(document.getElementById('period').value);

            // Calculate simple interest
            var interest = (loanAmount * (interestRate / 100) * period)./*round off number to 2d.p */toFixed(2);

            // Get current date
            var currentDate = new Date()/*JavaScript Date toLocaleDateString()​​ The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.*/.toLocaleDateString();

            // Prepare result message
            var resultMessage = `Loan details for ${this.name} ID Number:${this.idNumber}Loan Amount: ksh${this.loanAmount} Interest Rate:${this.interestRate}`;
            // Display result
            document.getElementById('results').innerHTML = resultMessage;
        });