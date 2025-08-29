
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



// Call button functionality
document.addEventListener('DOMContentLoaded', function() {
  const callButtons = document.querySelectorAll('.callButton');
  callButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert("Calling Police Helpline: 999")
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


     
  








      

