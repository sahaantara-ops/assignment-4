console.log(document);
// Step 1: Select all heart buttons
const icon2 = document.querySelectorAll('.icon-2');

// Step 2: Select the Navbar counter


const count = document.getElementById('navbar-heart-count');


// Step 3: Add click event to each heart button
icon2.forEach(icon2 => {
  icon2.addEventListener('click', () => {
    // Convert current count to number and increment
    let currentCount = parseInt(count.innerText);
    count.innerText = currentCount + 1;
  });
});
