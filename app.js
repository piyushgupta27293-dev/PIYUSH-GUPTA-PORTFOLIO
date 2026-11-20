/* =====================================
   PIYUSH GUPTA - PORTFOLIO JAVASCRIPT
===================================== */

/* =====================================
   1. CURRENT YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =====================================
   2. MOBILE NAVIGATION
===================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navbar nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

/* =====================================
   3. CLOSE MENU AFTER CLICK
===================================== */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");

    menuButton.textContent = "☰";

    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* =====================================
   4. SMOOTH SCROLLING
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* =====================================
   5. ACTIVE NAVBAR LINK
===================================== */

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".navbar nav a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;

          navItems.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentId) {
              link.classList.add("active");
            }
          });
        }
      });
    },

    {
      rootMargin: "-30% 0px -60% 0px",
    },
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });
}

/* =====================================
   6. SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
  ".section, .about-card, .education-card, " +
    ".skill-card, .project-card, .certificate-card, " +
    ".timeline-item, .strength-card, .contact-card",
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }
      });
    },

    {
      threshold: 0.12,
    },
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("show");
  });
}

/* =====================================
   7. PROFILE PHOTO FALLBACK
===================================== */

const profilePhoto = document.querySelector(".profile-photo");

if (profilePhoto) {
  profilePhoto.addEventListener("error", function () {
    this.style.display = "none";

    const parent = this.parentElement;

    parent.style.display = "grid";
    parent.style.placeItems = "center";

    parent.style.background = "linear-gradient(135deg, #102944, #0874c9)";

    const fallback = document.createElement("span");

    fallback.textContent = "PG";

    fallback.style.fontSize = "70px";
    fallback.style.fontWeight = "700";
    fallback.style.color = "#ffffff";

    parent.appendChild(fallback);
  });
}

/* =====================================
   8. PROJECT CARD HOVER EFFECT
===================================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });
});

/* =====================================
   9. SKILL CARD ANIMATION
===================================== */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card, index) {
  card.style.transitionDelay = `${index * 80}ms`;
});

/* =====================================
   10. NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.35)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* =====================================
   11. EMAIL VALIDATION / CONTACT LINKS
===================================== */

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(function (link) {
  link.setAttribute("aria-label", "Send email to Piyush Gupta");
});

/* =====================================
   12. CONSOLE MESSAGE
===================================== */

console.log(
  "%cWelcome to Piyush Gupta's Portfolio!",
  "color: #00a8ff; font-size: 18px; font-weight: bold;",
);

console.log("Java | Python | Full Stack Development");
