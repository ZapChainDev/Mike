// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Smooth scroll (if sections exist)
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Chat widget interaction
document.querySelector(".chat-widget").addEventListener("click", function () {
  alert("Chat feature coming soon! Get ready to connect with Mike.");
  // You can integrate a real chat widget here (e.g., Intercom, Drift, etc.)
});

// CTA Button interaction
document.querySelector(".cta-button").addEventListener("click", function () {
  alert("Welcome to Train with Mike! Registration page coming soon.");
  // You can redirect to a registration page or open a modal
});

// Member Login interaction
document.querySelector(".member-login").addEventListener("click", function () {
  alert("Login functionality coming soon!");
  // You can redirect to a login page or open a modal
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});
