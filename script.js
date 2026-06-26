const PROJECTS = [
  {
    title: "HealthySim",
    category: "Final Project · Game Development",
    tags: ["Unity", "C#", "Simulation"],
    image: "assets/images/healthysim-project.jpg",
    github: "https://github.com/Hafizhvito/HealthySimV1",
  },
  {
    title: "DINI Sehat Mental",
    category: "Web Development",
    tags: ["PHP", "TypeScript", "Mental Health"],
    image: "assets/images/dini-sehat-mental-project.jpg",
    github: "https://github.com/Hafizhvito/DINI-Sehat-Mental",
  },
  {
    title: "Akredoc - Document Management System",
    category: "Web Development",
    tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
    image: "assets/images/akredoc-project.jpg",
    github: "https://github.com/Hafizhvito/Akredoc",
  },
  {
    title: "TClicker - Auto Clicker Tool",
    category: "Desktop Application",
    tags: ["Python"],
    image: "assets/images/tclicker-project.jpg",
    github: "https://github.com/Hafizhvito/TClicker",
  },
  {
    title: "Currency Conversion Calculator",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/portfolio-project.jpg",
    github: "https://github.com/Hafizhvito/currency-converter",
  },
  {
    title: "Weather Dashboard",
    category: "Web Development",
    tags: ["API Integration"],
    image: "assets/images/weather-dashboard-concept.jpg",
    github: "https://github.com/Hafizhvito/weather-app",
  },
];

const ROTATING_WORDS = [
  "color & soul",
  "passion & code",
  "design & function",
  "creativity & tech",
];

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6c5ce7" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c5ce7",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
};

function createElement(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.className) {
    el.className = options.className;
  }

  if (options.text != null) {
    el.textContent = options.text;
  }

  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value);
    }
  }

  return el;
}

function bindImageFallback(img) {
  img.addEventListener(
    "error",
    () => {
      img.classList.add("img-missing");
      img.alt = "";
    },
    { once: true }
  );
}

function renderProjectCard(project) {
  const card = createElement("div", { className: "project-card" });

  const media = createElement("div", { className: "project-media" });
  const img = createElement("img", {
    attrs: { src: project.image, alt: project.title, loading: "lazy" },
  });
  bindImageFallback(img);
  media.appendChild(img);

  const overlay = createElement("div", { className: "project-overlay" });
  const overlayContent = createElement("div", { className: "overlay-content" });
  overlayContent.appendChild(createElement("h3", { text: project.title }));

  const link = createElement("a", {
    className: "view-project",
    attrs: {
      href: project.github,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  });
  link.appendChild(createElement("span", { text: "View Project" }));
  link.appendChild(createElement("i", { className: "fas fa-arrow-right" }));
  overlayContent.appendChild(link);
  overlay.appendChild(overlayContent);
  media.appendChild(overlay);

  const info = createElement("div", { className: "project-info" });
  info.appendChild(
    createElement("span", { className: "project-category", text: project.category })
  );
  info.appendChild(createElement("h3", { text: project.title }));

  const tags = createElement("div", { className: "project-tags" });
  for (const tag of project.tags) {
    tags.appendChild(createElement("span", { text: tag }));
  }
  info.appendChild(tags);

  card.append(media, info);
  return card;
}

function renderProjects(container, projects) {
  const fragment = document.createDocumentFragment();
  for (const project of projects) {
    fragment.appendChild(renderProjectCard(project));
  }
  container.replaceChildren(fragment);
}

let activeNotification = null;

function showNotification(message, type = "success") {
  if (activeNotification) {
    activeNotification.remove();
    activeNotification = null;
  }

  const notification = createElement("div", {
    className: `notification ${type}`,
    text: message,
  });
  document.body.appendChild(notification);
  activeNotification = notification;

  requestAnimationFrame(() => notification.classList.add("show"));

  setTimeout(() => {
    notification.classList.remove("show");
    notification.addEventListener(
      "transitionend",
      () => {
        notification.remove();
        if (activeNotification === notification) {
          activeNotification = null;
        }
      },
      { once: true }
    );
  }, 3000);
}

function isHoneypotFilled(form) {
  const trap = form.querySelector('input[name="_gotcha"]');
  return trap?.value.trim() !== "";
}

function initFooter() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".glass-navbar");

  if (!menuToggle || !navLinks || !navbar) {
    return navbar;
  }

  menuToggle.setAttribute("aria-expanded", "false");

  const closeMenu = () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      event.preventDefault();
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      const offset = target.offsetTop - navbar.offsetHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    });
  });

  return navbar;
}

function initNavbarScroll(navbar) {
  if (!navbar) {
    return;
  }

  const updateNavbar = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();
}

function initDynamicText() {
  const dynamicText = document.getElementById("dynamic-text");
  if (!dynamicText) {
    return;
  }

  let index = 0;

  setInterval(() => {
    dynamicText.style.opacity = "0";
    setTimeout(() => {
      dynamicText.textContent = ROTATING_WORDS[index];
      dynamicText.style.opacity = "1";
      index = (index + 1) % ROTATING_WORDS.length;
    }, 500);
  }, 3000);
}

function initHeroAnimation() {
  document.querySelectorAll(".hero-title .title-line").forEach((line, i) => {
    setTimeout(() => line.classList.add("active"), i * 200);
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".process-step, .project-card, .timeline-entry"
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const reveal = () => {
    const threshold = window.innerHeight / 1.2;
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < threshold) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal, { passive: true });
  reveal();
}

function initParallax() {
  const profile = document.querySelector(".profile-container");
  if (!profile) {
    return;
  }

  window.addEventListener(
    "scroll",
    () => {
      profile.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    },
    { passive: true }
  );
}

function initTechBubbles() {
  document.querySelectorAll(".tech-bubble").forEach((bubble, i) => {
    bubble.style.animationDelay = `${i * 0.3}s`;
  });
}

function initImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach(bindImageFallback);
}

function initForms() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (isHoneypotFilled(contactForm)) {
        return;
      }

      showNotification(
        "Thank you for your message! I will get back to you soon.",
        "success"
      );
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (isHoneypotFilled(newsletterForm)) {
        return;
      }

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput?.value.trim()) {
        showNotification("Please enter your email address", "error");
        return;
      }

      showNotification("Thank you for subscribing to my newsletter!", "success");
      newsletterForm.reset();
    });
  }
}

function initParticles() {
  if (typeof particlesJS === "function") {
    particlesJS("particles-js", PARTICLES_CONFIG);
  }
}

function initProjects() {
  const container = document.getElementById("projects-container");
  if (container) {
    renderProjects(container, PROJECTS);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFooter();
  const navbar = initNavigation();
  initNavbarScroll(navbar);
  initDynamicText();
  initHeroAnimation();
  initProjects();
  initScrollReveal();
  initParallax();
  initTechBubbles();
  initImageFallbacks();
  initForms();
  initParticles();
});
