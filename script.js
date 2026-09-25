const PROJECTS = [
  {
    title: "PulseWatch",
    category: "Monitoring Platform",
    description: "A self-hosted uptime and API monitoring platform with scheduled checks, incident tracking, and performance analytics.",
    tags: ["Next.js", "TypeScript", "MySQL", "Prisma"],
    symbol: "PW",
    tone: "sage",
    github: "https://github.com/Hafizhvito/pulsewatch",
  },
  {
    title: "Biostat Hub",
    category: "Learning Platform",
    description: "A full-stack biostatistics and SPSS learning hub with lessons, quizzes, calculators, downloads, and an admin panel.",
    tags: ["Next.js", "Express", "TypeScript", "MySQL"],
    symbol: "BH",
    tone: "sand",
    github: "https://github.com/Hafizhvito/Biostat-hub",
  },
  {
    title: "HealthSim",
    category: "Capstone · Game Development",
    description: "A health-focused daily-life simulation with nutrition, energy, work, dialogue, and character progression systems.",
    tags: ["Unity 6", "C#", "URP", "Game Systems"],
    symbol: "HS",
    tone: "mist",
    github: "https://github.com/Hafizhvito/HealthySimV1",
  },
  {
    title: "Akredoc",
    category: "Document Management",
    description: "A document monitoring and management system designed for Informatics Engineering accreditation workflows.",
    tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
    symbol: "AK",
    tone: "clay",
    github: "https://github.com/Hafizhvito/Akredoc",
  },
  {
    title: "DINI Sehat Mental",
    category: "Mental Health Web App",
    description: "A web application supporting structured mental-health screening through accessible assessment forms.",
    tags: ["PHP", "TypeScript", "Blade"],
    symbol: "DS",
    tone: "lavender",
    github: "https://github.com/Hafizhvito/DINI-Sehat-Mental",
  },
  {
    title: "TClicker",
    category: "Desktop Utility",
    description: "A lightweight Python automation tool for repeatable clicking and recorded desktop actions.",
    tags: ["Python", "Automation", "Desktop"],
    symbol: "TC",
    tone: "slate",
    github: "https://github.com/Hafizhvito/TClicker",
  },
];

const ROTATING_WORDS = [
  "clarity & care",
  "code & purpose",
  "design & function",
  "curiosity & craft",
];

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 34, density: { enable: true, value_area: 900 } },
    color: { value: "#779487" },
    shape: { type: "circle" },
    opacity: { value: 0.22, random: true },
    size: { value: 2.5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9caf9f",
      opacity: 0.16,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
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

  const media = createElement("div", {
    className: `project-media project-visual tone-${project.tone}`,
  });
  media.appendChild(createElement("span", { className: "project-symbol", text: project.symbol }));
  media.appendChild(createElement("span", { className: "project-visual-label", text: project.category }));

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
  info.appendChild(createElement("p", { className: "project-description", text: project.description }));

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

      const formData = new FormData(contactForm);
      const senderName = String(formData.get("name") || "").trim();
      const senderEmail = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "Portfolio inquiry").trim();
      const message = String(formData.get("message") || "").trim();
      const body = `${message}\n\nFrom: ${senderName} (${senderEmail})`;

      showNotification("Opening your email app…", "success");
      window.location.href = `mailto:pixelsreet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      contactForm.reset();
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
