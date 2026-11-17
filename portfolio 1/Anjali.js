// =====================================
// 1. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after clicking a link

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");

      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =====================================
// 2. TYPING ANIMATION
// =====================================

const typingText = document.getElementById("typing-text");

const roles = [
  "Software Developer",
  "Java Developer",
  "Full Stack Developer",
  "Web Developer",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingAnimation() {
  if (!typingText) return;

  let currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    speed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    speed = 500;
  }

  setTimeout(typingAnimation, speed);
}

if (typingText) {
  typingAnimation();
}

// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const scrollObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        scrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach(function (element) {
  scrollObserver.observe(element);
});

// =====================================
// 4. ACTIVE NAVIGATION ON SCROLL
// =====================================

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// =====================================
// 5. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =====================================
// 6. AUTOMATIC FOOTER YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =====================================
// 7. CONTACT BUTTON INTERACTION
// =====================================

const contactButton = document.querySelector(".primary-btn");

if (contactButton) {
  contactButton.addEventListener("mouseenter", function () {
    contactButton.style.transform = "translateY(-5px)";
  });

  contactButton.addEventListener("mouseleave", function () {
    contactButton.style.transform = "translateY(0)";
  });
}
