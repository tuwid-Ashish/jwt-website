// ================================
// Journalist Welfare Trust
// Main JavaScript for Interactivity
// ACCESSIBILITY OPTIMIZED FOR ELDERLY USERS
// ================================

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Text Size Controls (Accessibility Feature)
  const textSizeControls = document.querySelectorAll(".text-size-btn");
  const htmlElement = document.documentElement;

  // Load saved text size preference
  const savedTextSize = localStorage.getItem("textSize") || "normal";
  applyTextSize(savedTextSize);

  textSizeControls.forEach((btn) => {
    btn.addEventListener("click", function () {
      const size = this.getAttribute("data-size");
      applyTextSize(size);
      localStorage.setItem("textSize", size);

      // Update active state
      textSizeControls.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function applyTextSize(size) {
    const root = document.documentElement;
    switch (size) {
      case "small":
        root.style.fontSize = "14px";
        break;
      case "large":
        root.style.fontSize = "20px";
        break;
      default:
        root.style.fontSize = "16px";
    }
  }

  // Active Navigation Link Highlight
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = navLinks ? navLinks.querySelectorAll("a") : [];

  navItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Filter functionality for News page
  const filterTabs = document.querySelectorAll(".filter-tab");
  const newsItems = document.querySelectorAll(".news-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active tab
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Filter news items
      newsItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
          setTimeout(() => (item.style.opacity = "1"), 10);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });

  // Form handling for Contact page
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Simple validation
      if (!data.name || !data.email || !data.message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // In a real application, this would send data to a server
      alert(
        "Thank you for your message! We will get back to you soon at " +
          data.email
      );
      this.reset();
    });
  }

  // Lazy load images (simple implementation)
  const images = document.querySelectorAll("img[data-src]");
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
});
