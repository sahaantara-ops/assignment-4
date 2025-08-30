
  document.addEventListener('DOMContentLoaded', function() {
  const heartIcons = document.querySelectorAll('.white-heart-icon');

  // Select the heart count display in the navbar
  const heartCountDisplay = document.getElementById('heart-count');

  // Initialize count
  let heartCount = 0;

  // Loop through each heart icon
  heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      heartCount++;
      heartCountDisplay.textContent = heartCount;

      // Optional: Add visual feedback
      icon.classList.toggle('active-heart');
    });
  });
});


// Step 1: Attach a delegated event listener to the parent container
document.getElementById('container').addEventListener('click', function(event) {
  // Step 2: Check if the clicked element is a Copy button
  if (event.target.classList.contains('copy-btn')) {
    
    // Step 3: Find the closest card and get the hotline number
    const card = event.target.closest('.box');
    const hotlineText = card.querySelector('.box-text-2').innerText;

    // Step 4: Use Clipboard API to copy the text
    navigator.clipboard.writeText(hotlineText).then(() => {
      alert(`Hotline number "${hotlineText}" copied to clipboard!`);
      
    });
  };
}); 

// Optional: Update copy count in navbar
let copyCount = 0;
function increaseCopyCount() {
  copyCount++;
  const counter = document.getElementById('copy-count');
 
  }










// Call button functionality
document.addEventListener('DOMContentLoaded', function() {
  const callButtons = document.querySelectorAll('.callButton');
  callButtons.forEach(button => {
    button.addEventListener('click', function() {
      
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let coins = 100;
  const coinDisplay = document.getElementById('coin-count');
  const callButtons = document.querySelectorAll('.callButton');
  

  callButtons.forEach(button => {
    button.addEventListener('click', () => {
      

      // Check coin balance
      if (coins < 20) {
        alert("You need at least 20 coins to make a call.");
        return;
      }

      // Deduct coins and update display
      coins -= 20;
      coinDisplay.textContent = coins;

     
    });
  });
});

// Select the call history list and clear button
const callHistoryList = document.getElementById('call-history-list');
const clearButton = document.querySelector('.history-btn');

// Function to add a call entry
function addCallToHistory(serviceName, serviceNumber) {
  const li = document.createElement('li');
  li.classList.add('history-entry');
  const time = new Date().toLocaleTimeString(); // Optional timestamp
  li.textContent = `${serviceName} (${serviceNumber}) — ${time}`;
  callHistoryList.appendChild(li);
}

// Clear history on button click
clearButton.addEventListener('click', () => {
  callHistoryList.innerHTML = '';
});

// Attach event listeners to all call buttons
document.querySelectorAll('.callButton').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.box '); // Adjust if your card class is different
    const serviceName = card.querySelector('.box-text').textContent;
    const serviceNumber = card.querySelector('.box-text-2').textContent;

    addCallToHistory(serviceName, serviceNumber);
    alert(`Calling ${serviceName} at ${serviceNumber}`);
  });
});










      

