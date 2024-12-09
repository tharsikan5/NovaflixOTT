// Select all the arrow buttons and movie lists
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

// Add event listeners to each arrow
arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    const currentMovieList = movieLists[index];
    
    // Ensure we are targeting the correct list
    console.log('Current movie list:', currentMovieList);
    
    const isLeftArrow = arrow.classList.contains("left");
    
    // Log if it is a left or right arrow
    console.log(isLeftArrow ? 'Left Arrow Clicked' : 'Right Arrow Clicked');
    
    // Scroll the movie list left or right
    if (isLeftArrow) {
      currentMovieList.scrollLeft -= 200; // Scroll left
    } else {
      currentMovieList.scrollLeft += 200; // Scroll right
    }

    // Log the current scroll position to verify
    console.log('Scroll position:', currentMovieList.scrollLeft);
  });
});

// TOGGLE Dark/Light Mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

// Dark mode is the default on page load
document.body.classList.add("dark-mode");
items.forEach((item) => {
  item.classList.add("dark-mode");
});
ball.classList.add("active");

ball.addEventListener("click", () => {
  // Toggle dark/light mode
  document.body.classList.toggle("dark-mode");
  items.forEach((item) => {
    item.classList.toggle("dark-mode");
  });
  ball.classList.toggle("active");
});
