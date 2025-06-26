// Write your code here!// JavaScript
// Remove the <main id="main"> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Bright Mahonga is the champion'; // Replace with your name

// Append the new header to the document body
document.body.appendChild(newHeader);