
// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
let count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = function(){
  totalCount.innerHTML = count;
  count++;
}
const twoSecondDelay = setTimeout(handleIncrement, 2000);

function stopCount() {
  clearTimeout(twoSecondDelay);
}
// Function to decrement count
const handleDecrement = function(){
  count--;
  totalCount.innerHTML = count;
}

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);