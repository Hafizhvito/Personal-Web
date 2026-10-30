/**
 * Personal Portfolio Script
 * Single source of truth for project data: PROJECTS array
 */

const PROJECTS = [
  {
    title: "DINI Sehat Mental",
    category: "Mental Health Platform",
    year: "2024",
    description: "A web application supporting structured mental-health screening through accessible assessment forms.",
    tags: ["PHP", "TypeScript", "Blade"],
    github: "https://github.com/Hafizhvito/DINI_SEHAT_MENTAL",
    live: "https://streskerjaperempuan.com/",
    image: "assets/images/dini-sehat-mental.png",
    imageAlt: "Screenshot of the DINI Sehat Mental platform home screen showing the work stress screening interface.",
  },
  {
    title: "Biostat Hub",
    category: "Learning Platform",
    year: "2026",
    description: "A full-stack biostatistics and SPSS learning hub with lessons, quizzes, calculators, downloads, and an admin panel.",
    tags: ["Next.js", "Express", "TypeScript", "MySQL"],
    github: "https://github.com/Hafizhvito/Biostat-hub",
    live: "https://biostatresearch.com/",
    image: "assets/images/biostat-hub.webp",
    imageAlt: "Screenshot of the Biostat Hub learning platform home screen showing structured statistics curriculum modules.",
  },
  {
    title: "PulseWatch",
    category: "Monitoring Platform",
    year: "2026",
    description: "A self-hosted uptime and API monitoring platform with scheduled checks, incident tracking, and performance analytics.",
    tags: ["Next.js", "TypeScript", "MySQL", "Prisma"],
    github: "https://github.com/Hafizhvito/pulsewatch",
  },
  {
    title: "HealthSim",
    category: "Capstone / Game Development",
    year: "2026",
    description: "A health-focused daily-life simulation with nutrition, energy, work, dialogue, and character progression systems.",
    tags: ["Unity 6", "C#", "URP", "Game Systems"],
    github: "https://github.com/Hafizhvito/HealthySimV1",
  },
  {
    title: "Akredoc",
    category: "Document Management",
    year: "2025",
    description: "A document monitoring and management system designed for Informatics Engineering accreditation workflows.",
    tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
    github: "https://github.com/Hafizhvito/Akredoc",
  },
  {
    title: "TClicker",
    category: "Desktop Utility",
    year: "2024",
    description: "A lightweight Python automation tool for repeatable clicking and recorded desktop actions.",
    tags: ["Python", "Automation", "Desktop"],
    github: "https://github.com/Hafizhvito/TClicker",
  },
];

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

function renderFeaturedCard(project, index) {
  const card = createElement("article", {
    className: "project-feature-card reveal-item",
  });

  if (project.image) {
    const frame = createElement("div", {
      className: "project-image-frame",
    });

    const img = createElement("img", {
      className: "project-image",
      attrs: {
        src: project.image,
        alt: project.imageAlt || `${project.title} screenshot`,
        width: "800",
        height: "500",
        loading: "lazy",
      },
    });

    frame.appendChild(img);
    card.appendChild(frame);
  }

  const content = createElement("div", {
    className: "project-feature-content",
  });

  const metaRow = createElement("div", {
    className: "project-meta-row",
  });
  const num = String(index + 1).padStart(2, "0");
  metaRow.appendChild(createElement("span", { text: `${num} · ${project.category}` }));
  metaRow.appendChild(createElement("span", { text: "·" }));
  metaRow.appendChild(createElement("span", { text: project.year }));
  content.appendChild(metaRow);

  content.appendChild(
    createElement("h3", {
      className: "project-heading",
      text: project.title,
    })
  );

  content.appendChild(
    createElement("p", {
      className: "project-description",
      text: project.description,
    })
  );

  const tagsText = `Stack: ${project.tags.join(", ")}`;
  content.appendChild(
    createElement("p", {
      className: "project-tags-list",
      text: tagsText,
    })
  );

  const links = createElement("div", {
    className: "project-links",
  });
  if (project.live) {
    const liveLink = createElement("a", {
      className: "project-source-link",
      attrs: {
        href: project.live,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit live website for ${project.title}`,
      },
      text: "Live website ->",
    });
    links.appendChild(liveLink);
    links.appendChild(
      createElement("span", {
        text: " · ",
        attrs: { style: "color: var(--hairline-dark); margin: 0 0.25rem;" },
      })
    );
  }
  const sourceLink = createElement("a", {
    className: "project-source-link",
    attrs: {
      href: project.github,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `View source code for ${project.title} on GitHub`,
    },
    text: "Source code ->",
  });
  links.appendChild(sourceLink);
  content.appendChild(links);

  card.appendChild(content);
  return card;
}

function renderIndexRow(project, index) {
  const row = createElement("article", {
    className: "index-row reveal-item",
  });

  const metaCol = createElement("div", {
    className: "index-meta-col",
  });
  const num = String(index + 1).padStart(2, "0");
  metaCol.appendChild(
    createElement("span", {
      className: "index-number",
      text: num,
    })
  );
  metaCol.appendChild(
    createElement("span", {
      className: "index-year",
      text: project.year,
    })
  );
  row.appendChild(metaCol);

  const mainCol = createElement("div", {
    className: "index-main-col",
  });

  const titleLine = createElement("div", {
    className: "index-title-line",
  });
  titleLine.appendChild(
    createElement("h3", {
      className: "index-title",
      text: project.title,
    })
  );
  titleLine.appendChild(
    createElement("span", {
      className: "index-category",
      text: project.category,
    })
  );
  mainCol.appendChild(titleLine);

  mainCol.appendChild(
    createElement("p", {
      className: "index-description",
      text: project.description,
    })
  );

  mainCol.appendChild(
    createElement("p", {
      className: "index-stack",
      text: `Stack: ${project.tags.join(", ")}`,
    })
  );
  row.appendChild(mainCol);

  const actionCol = createElement("div", {
    className: "index-action-col",
  });
  if (project.live) {
    const liveLink = createElement("a", {
      className: "index-link",
      attrs: {
        href: project.live,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit live website for ${project.title}`,
      },
      text: "Live ->",
    });
    actionCol.appendChild(liveLink);
    actionCol.appendChild(
      createElement("span", {
        text: " · ",
        attrs: { style: "color: var(--hairline-dark); margin: 0 0.25rem;" },
      })
    );
  }
  const link = createElement("a", {
    className: "index-link",
    attrs: {
      href: project.github,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Open ${project.title} repository on GitHub`,
    },
    text: "Source code ->",
  });
  actionCol.appendChild(link);
  row.appendChild(actionCol);

  return row;
}

function renderProjects(container, projects) {
  const fragment = document.createDocumentFragment();

  // 1. Projects with an image -> Featured Treatment
  const featured = projects.filter((p) => Boolean(p.image));
  if (featured.length > 0) {
    const featuredGrid = createElement("div", {
      className: "projects-featured",
    });
    featured.forEach((project, idx) => {
      featuredGrid.appendChild(renderFeaturedCard(project, idx));
    });
    fragment.appendChild(featuredGrid);
  }

  // 2. Projects without an image -> Editorial Index
  const indexed = projects.filter((p) => !p.image);
  if (indexed.length > 0) {
    const indexSection = createElement("div", {
      className: "projects-index-list",
    });

    const indexLabel = createElement("div", {
      className: "index-list-header",
    });
    indexLabel.appendChild(
      createElement("h3", {
        className: "index-list-title",
        text: "Additional Systems & Utilities",
      })
    );
    indexSection.appendChild(indexLabel);

    indexed.forEach((project) => {
      const overallIndex = projects.indexOf(project);
      indexSection.appendChild(renderIndexRow(project, overallIndex));
    });

    fragment.appendChild(indexSection);
  }

  container.replaceChildren(fragment);
}

let activeNotification = null;

function showNotification(message) {
  if (activeNotification) {
    activeNotification.remove();
    activeNotification = null;
  }

  const notification = createElement("div", {
    className: "notification",
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
  }, 3200);
}

function isHoneypotFilled(form) {
  const trap = form.querySelector('input[name="_gotcha"]');
  return Boolean(trap && trap.value.trim() !== "");
}

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "Menu";
  };

  navToggle.addEventListener("click", () => {
    const isExpanded = navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isExpanded));
    navToggle.textContent = isExpanded ? "Close" : "Menu";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
    }
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-item");
  if (!elements.length) return;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}

function initForms() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isHoneypotFilled(form)) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio Inquiry").trim();
    const message = String(formData.get("message") || "").trim();

    const body = `${message}\n\nSender: ${name} (${email})`;

    showNotification("Opening your email client...");
    window.location.href = `mailto:hafizhvito2@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
  });
}

function initFooter() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function initProjects() {
  const container = document.getElementById("projects-container");
  if (container) {
    renderProjects(container, PROJECTS);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
  initForms();
  initFooter();
  initScrollReveal();
});
