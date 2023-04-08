// --> Variables
// Selecting li in navigation bar
let list = document.querySelectorAll("nav ul li");

// --> Events
// Create for each to get event to li
list.forEach((i) =>
// Set event for li
i.addEventListener('click', active))

// --> Functions
// Function for add and remove 'active' class
function active() {
  // Create for each to add and remove 'active' class
  list.forEach((i) =>
  // Remove 'active' class
   i.classList.remove("active"));
   // Add 'active' class
   this.classList.add('active')
}
