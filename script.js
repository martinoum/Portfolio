// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const icon = document.querySelector(".theme-toggle i");
  icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  const icon = document.querySelector(".theme-toggle i");
  icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);
  event.target.reset();
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background =
      document.body.getAttribute("data-theme") === "dark"
        ? "rgba(15, 23, 42, 0.98)"
        : "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background =
      document.body.getAttribute("data-theme") === "dark"
        ? "rgba(15, 23, 42, 0.95)"
        : "rgba(255, 255, 255, 0.95)";
  }
});
