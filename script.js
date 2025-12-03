document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Mobile navigation toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Toggle body scroll when menu is open
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Add shadow to navbar on scroll
  const navbar = document.querySelector(".glass-navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Animate skill bars on scroll
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress");

    skillBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (barPosition < screenPosition) {
        bar.style.width = bar.getAttribute("data-level") + "%";
      }
    });
  }

  // Initialize skill bars
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    bar.style.width = "0%";
  });

  // Run once on page load
  animateSkillBars();

  // Run on scroll
  window.addEventListener("scroll", animateSkillBars);

  // Dynamic text animation
  function initDynamicText() {
    const dynamicText = document.getElementById("dynamic-text");
    const words = [
      "color & soul",
      "passion & code",
      "design & function",
      "creativity & tech",
    ];
    let currentWord = 0;

    function changeWord() {
      dynamicText.style.opacity = 0;

      setTimeout(() => {
        dynamicText.textContent = words[currentWord];
        dynamicText.style.opacity = 1;
        currentWord = (currentWord + 1) % words.length;
      }, 500);
    }

    setInterval(changeWord, 3000);
  }

  // Initialize hero title animations
  function initHeroTitleAnimation() {
    const titleLines = document.querySelectorAll(".hero-title .title-line");

    titleLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("active");
      }, index * 200);
    });
  }

  // Load projects dynamically
  function loadProjects() {
    const projectsContainer = document.getElementById("projects-container");

    // Sample projects data - you can easily add more projects here
    const projectsData = [
      // COMPLETED PROJECTS
      {
        title: "Akredoc - Document Management System",
        category: "Web Development",
        tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
        image: "assets/images/akredoc-project.jpg",
        description:
          "A web application for managing and organizing documents with user authentication and file management features.",
        status: "Completed",
        github: "https://github.com/Hafizhvito/Akredoc",
        highlights: [
          "User authentication",
          "File upload system",
          "Responsive design",
          "Database integration",
        ],
      },
      {
        title: "TClicker - Auto Clicker Tool",
        category: "Desktop Application",
        tags: ["Python", "Tkinter", "Automation"],
        image: "assets/images/tclicker-project.jpg",
        description:
          "A Python-based auto clicker application with customizable click intervals and hotkey support.",
        status: "Completed",
        github: "https://github.com/Hafizhvito/TClicker",
        highlights: [
          "GUI with Tkinter",
          "Customizable settings",
          "Hotkey support",
          "Cross-platform compatibility",
        ],
      },
      {
        title: " Currency Conversion Calculator",
        category: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        image: "assets/images/portfolio-project.jpg",
        description:
          "My personal portfolio website showcasing my projects and skills with modern design and animations.",
        status: "Completed",
        github: "https://github.com/Hafizhvito/currency-converter",
        highlights: [
          "Modern UI/UX",
          "Responsive design",
          "CSS animations",
          "Contact form",
        ],
      },
      {
        title: "Weather Dashboard",
        category: "Web Development",
        tags: ["React", "API Integration", "Chart.js"],
        image: "assets/images/weather-dashboard-concept.jpg",
        description:
          "A weather dashboard that displays current weather and forecasts using external weather APIs with interactive charts.",
        status: "In Progress",
        github: "https://github.com/Hafizhvito/weather-app",
        highlights: [
          "API integration",
          "Data visualization",
          "Location services",
          "Responsive charts",
        ],
      },
    ];

    // Display all projects
    displayProjects(projectsData);
  }

  // Display projects in the grid
  function displayProjects(projects) {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";

      projectCard.innerHTML = `
              <div class="project-media">
                  <img src="${project.image}" alt="${
        project.title
      }" onerror="this.src='https://i.pinimg.com/736x/b3/e2/c3/b3e2c31496f8ff23f690a465fae3591c.jpg'">
                  <div class="project-overlay">
                      <div class="overlay-content">
                          <h3>${project.title}</h3>
                          <a href="${
                            project.github
                          }" class="view-project" target="_blank">
                              <span>View Project</span>
                              <i class="fas fa-arrow-right"></i>
                          </a>
                      </div>
                  </div>
              </div>
              <div class="project-info">
                  <span class="project-category">${project.category}</span>
                  <h3>${project.title}</h3>
                  <div class="project-tags">
                      ${project.tags
                        .map((tag) => `<span>${tag}</span>`)
                        .join("")}
                  </div>
              </div>
          `;

      projectsContainer.appendChild(projectCard);
    });
  }

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());

      // Here you would typically send the form data to a server
      console.log("Form submitted:", formValues);

      // Show success message
      showNotification(
        "Thank you for your message! I will get back to you soon.",
        "success"
      );

      // Reset the form
      this.reset();
    });
  }

  // Newsletter form handling
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');

      // Simple validation
      if (emailInput.value.trim() === "") {
        showNotification("Please enter your email address", "error");
        return;
      }

      // Here you would typically send the email to your newsletter service
      console.log("Newsletter subscription:", emailInput.value);

      // Show success message
      showNotification(
        "Thank you for subscribing to my newsletter!",
        "success"
      );

      // Reset the form
      emailInput.value = "";
    });
  }

  // Show notification function
  function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Initialize particles.js
  function initParticles() {
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", {
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
      });
    }
  }

  // Initialize all animations
  function initAnimations() {
    initDynamicText();
    initHeroTitleAnimation();

    // Animate elements on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll(
        ".process-step, .project-card"
      );

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }

    // Set initial state for animated elements
    document
      .querySelectorAll(".process-step, .project-card")
      .forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      });

    // Run once on page load
    animateOnScroll();

    // Run on scroll
    window.addEventListener("scroll", animateOnScroll);

    // Parallax effect for profile image
    const profileContainer = document.querySelector(".profile-container");
    if (profileContainer) {
      window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        profileContainer.style.transform = `translateY(${
          scrollPosition * 0.1
        }px)`;
      });
    }

    // Animate tech bubbles
    const techBubbles = document.querySelectorAll(".tech-bubble");
    techBubbles.forEach((bubble, index) => {
      bubble.style.animationDelay = `${index * 0.3}s`;
    });
  }

  // Initialize everything
  loadProjects();
  initParticles();
  initAnimations();
});
