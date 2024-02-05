
var userNumber = prompt('Please enter a number from 0-10 to generate a multiplication table:', '5');
var table = parseInt(userNumber, 10);
if (!isNaN(table) && table >= 0 && table <= 10) {
 var msg = '<h2>Multiplication Table</h2>';
  msg += '<table>'; 
 for (var i = 1; i <= 10; i++) {
    msg += '<tr><td>' + i + ' x ' + table + ' = ' + (i * table) + '</td></tr>';
  }
  msg += '</table>'; 
} else {
  msg = 'Please refresh the page and enter a valid number.';
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;
