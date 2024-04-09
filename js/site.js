// Collect user inputs
// Aka entry point
function getValues() {
// get the <input> element for startNumber and grab its value
let startInputElement = document.getElementById('startNumber');
let startNumber = startInputElement.value;

// do the same for endNumber
let endNumber = document.getElementById('endNumber').value;

startNumber = Number(startNumber)
endNumber = Number(endNumber)

let generatedNumbers = generateValues(startNumber, endNumber);

displayValues (generatedNumbers);

}

// Generate a list of numbers between those two values

function generateValues (start, end) {
  let numbers = [];
  
  for (let i = start; i <= end; i = i + 1) {
    numbers.push(i);
  }

  return numbers;
  
}

// Display them in my results table

function displayValues (numberArray) {
// numberArray = [2, 3, 4, 5, 6, 7]
        // index  0  1  2  3  4  5
let tableHtml = '';

for (let index = 0; index < numberArray.length; index = index + 1) {

   let number = numberArray[index];
   
   tableHtml = tableHtml + '<tr><td>' + number + '</tr></td>'

}

let tbody = document.getElementById('results');
tbody.innerHTML = tableHtml;

}