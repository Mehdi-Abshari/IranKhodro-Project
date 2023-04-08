// --> Variables
// Selecting li in navigation bar
const list = document.querySelectorAll("nav ul li"),
  menuToggle = document.querySelector(".menuToggle"),
  header = document.querySelector("header");

// --> Events
// Create for each to get event to li
list.forEach((i) =>
  // Set event for li
  i.addEventListener("click", active)
);

// --> Functions
// Function for add and remove 'active' class
function active() {
  // Create for each to add and remove 'active' class
  list.forEach((i) =>
    // Remove 'active' class
    i.classList.remove("active")
  );
  // Add 'active' class
  this.classList.add("active");
}
// Function for add 'active' class to header
function toggleMenu(){
  // add 'active' class to header
  header.classList.toggle('active');
}
