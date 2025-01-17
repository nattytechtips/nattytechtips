// Dark Mode Toggle functionality
const modeToggleButton = document.getElementById("modeToggle");

modeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const currentMode = document.body.classList.contains("dark-mode")
    ? "🌙"
    : "🌞";
  modeToggleButton.textContent = currentMode;
});

// Smooth Scroll for Navbar Links (Optional for additional control)
const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 50, // Adjust for the sticky navbar
      behavior: "smooth"
    });
  });
});