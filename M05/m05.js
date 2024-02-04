// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

// Ask the user for a number from 0-10
          var userNumber = window.prompt("Please enter a number from 0-10 for a multiplication table:", "0");

          // Initialize the message with a heading for the multiplication table
          var msg = '<h2>Multiplication Table</h2>';

          // Convert the user input to an integer
          var table = parseInt(userNumber, 10);

          // Check if the user input is a number between 0 and 10
          if(!isNaN(table) && table >= 0 && table <= 10) {
            // Loop to create the multiplication table based on user input
            for(var i = 1; i <= 10; i++) {
              msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
            }
          } else {
            // Inform the user of invalid input
            msg += "Please refresh and enter a valid number from 0-10.";
          }

          // Display the multiplication table on the web page
          document.getElementById('blackboard').innerHTML = msg;
