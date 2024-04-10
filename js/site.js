// Collect user inputs
function getValues() {
// get the <input> element for startNumber and grab its value
let startNumber = document.getElementById('startNumber').value;

// do the same for endNumber
let endNumber = document.getElementById('endNumber').value;

startNumber = Number(startNumber)
endNumber = Number(endNumber)

if (isNaN(startNumber) || isNaN(endNumber)) {
  Swal.fire ({
    icon: 'error',
    title: 'Oops!',
    text: 'Please enter valid numbers for CountUP! to use.',
    backdrop: false
  })
} else if ((startNumber > endNumber) || (startNumber < 0) || (endNumber > 100)) {
  Swal.fire ({
    icon: 'error',
    title: 'Oops!',
    text: 'Please enter valid numbers for CountUP! to use.',
    backdrop: false
})

} else {let generatedNumbers = generateValues(startNumber, endNumber);

displayValues (generatedNumbers);
}

}


// Generate a list of numbers between those two values

function generateValues (start, end) {
  let numbers = [];
  
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
  
}

// Display them in my results table

function displayValues (numberArray) {
// numberArray = [2, 3, 4, 5, 6, 7]
        // index  0  1  2  3  4  5
let tableHtml = '';

for (let index = 0; index < numberArray.length; index +=1) {

   let number = numberArray[index];

   let className = '';

   if (number % 2 == 0) {
    className = 'even';
   } else {
    className = 'odd';
   }
   
   tableHtml += `<tr><td class="${className}">${number}</td></tr>`;

}

let tbody = document.getElementById('results');
tbody.innerHTML = tableHtml;

}