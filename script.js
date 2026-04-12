const portfolio = {
  summary:
    "Software Developer with experience building scalable full-stack applications and AI-driven systems. Strong in Python, JavaScript, automation, REST APIs, and cloud-backed workflows with a focus on practical impact.",
  focusCopy:
    "Designing software that combines backend reliability, AI integration, and workflow automation for real teams and real use cases.",
  profileCopy:
    "I build systems that sit at the intersection of software engineering and applied AI. My work spans automation tools, LLM-powered features, data pipelines, and full-stack platforms, with an emphasis on making complex workflows faster and easier to use.",
  focusAreas: [
    "Full-stack applications",
    "AI implementation",
    "Automation pipelines",
    "REST APIs",
    "Cloud-backed workflows",
  ],
  signals: [
    {
      title: "Role target",
      value: "Software Engineer",
    },
    {
      title: "Start date",
      value: "May 2026",
    },
    {
      title: "Core stack",
      value: "Python, JavaScript, TypeScript",
    },
    {
      title: "Strength",
      value: "AI + backend + automation",
    },
  ],
  experience: [
    {
      role: "AI Implementation Intern",
      company: "University of Cincinnati",
      dates: "Feb 2025 - Apr 2026",
      points: [
        "Built AI-powered automation features using OpenAI APIs to improve workflow efficiency and reduce manual intervention.",
        "Designed backend services in Python for large-scale data processing and automation pipelines.",
        "Developed and deployed LLM-based internal applications that improved productivity across workflows.",
      ],
    },
    {
      role: "SDE Intern",
      company: "Instyn Education LLC",
      dates: "Mar 2023 - Apr 2024",
      points: [
        "Developed Python automation tools that reduced manual reporting effort by about 30 percent and improved data accuracy.",
        "Built scalable data pipelines for analytics and reporting, enabling faster insight generation.",
        "Integrated AI models into existing systems to improve performance and decision-making workflows.",
      ],
    },
    {
      role: "Technical Lead",
      company: "TEAM / Malla Reddy University",
      dates: "Nov 2021 - Apr 2024",
      points: [
        "Led a team of developers to design and deliver software projects with consistent execution and quality.",
        "Coordinated development tasks to improve team productivity and project efficiency.",
        "Mentored junior developers and reinforced best practices in coding and system design.",
      ],
    },
  ],
  projects: [
    {
      title: "Employee Verification System",
      subtitle: "Featured full-stack project",
      description:
        "Built a secure verification workflow for employees and employers with role-based access, profile management, and a structured verification pipeline.",
      highlights: [
        "Role-based authentication",
        "REST APIs for verification flows",
        "Responsive UI and scalable backend architecture",
      ],
      links: [
        { label: "Live Project", href: "https://verify.shashii.tech" },
        { label: "Project Details", href: "#projects" },
      ],
    },
    {
      title: "Traffic Analytics System",
      subtitle: "Python + YOLOv8 computer vision",
      description:
        "Built a real-time traffic monitoring system that used object detection and density analysis to extract insights from live video streams.",
      highlights: [
        "YOLOv8-based object detection",
        "Traffic flow and congestion analysis",
        "Automated data collection and visualization support",
      ],
      links: [],
    },
    {
      title: "Text-to-Visual Presentation Generator",
      subtitle: "Python + OpenAI APIs + Azure",
      description:
        "Created a system that transformed PDF text into PowerPoint presentations with AI-generated voiceovers and prompt-driven customization.",
      highlights: [
        "PDF-to-presentation workflow",
        "Structured Excel-driven prompts",
        "Azure speech synthesis and automated slide generation",
      ],
      links: [],
    },
  ],
  education: [
    {
      title: "Master's in Computer Science",
      meta: "University of Cincinnati | Aug 2024 - Apr 2026",
      text: "Graduate study focused on advanced software engineering, systems thinking, and applied AI development.",
    },
    {
      title: "Bachelor's in Computer Science (AI & ML)",
      meta: "Malla Reddy Engineering College | Aug 2020 - Jun 2024",
      text: "Built the technical base across programming, AI and machine learning, and project-led development.",
    },
  ],
  certifications: [
    {
      title: "Python",
      meta: "Microsoft",
      text: "Demonstrates practical Python knowledge for software development and problem solving.",
      certificateHref: "https://drive.google.com/file/d/1YlL4YEJvpq8XUYlL6kdzkOOJ9ImWWDmM/preview",
      verifyHref: "https://www.credly.com/badges/3a54b0af-b024-4bcf-8e84-0fdf14286b4b/public_url",
    },
    {
      title: "Azure Fundamentals",
      meta: "Microsoft",
      text: "Validates foundational cloud knowledge relevant to deployment, services, and platform workflows.",
      certificateHref: "https://drive.google.com/file/d/1YjZkE6T6tJTyU2LAj6GpS4eFFAO9e5FN/preview",
      verifyHref: "https://www.credly.com/badges/d88271d5-096b-4076-b071-6a5d406f6899/public_url",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Frameworks",
      items: ["React", "Node.js", "Express.js", "Streamlit", "Plotly"],
    },
    {
      title: "Tools and Platforms",
      items: ["Git", "GitHub", "Azure", "Vercel", "MongoDB", "MySQL"],
    },
    {
      title: "AI and Cloud",
      items: ["OpenAI APIs", "Azure OpenAI", "LLM Applications", "Automation Pipelines"],
    },
  ],
  contactCopy:
    "Reach out for software engineering roles, product-minded engineering teams, or projects where AI and automation need to translate into reliable user-facing systems.",
  contacts: [
    {
      label: "Email",
      href: "mailto:shashidharreddygk@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shashidhar-reddy-784b04228/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaQsVsbqeRUOttrD3DWF%2FtA%3D%3D",
    },
    {
      label: "GitHub",
      href: "https://github.com/309Shashi",
    },
    {
      label: "Resume",
      href: "assets/GKSR_RESUME.pdf",
    },
  ],
};

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderSignals() {
  const root = document.getElementById("signal-grid");
  root.innerHTML = portfolio.signals
    .map(
      (item) => `
        <article class="signal-card">
          <strong>${item.title}</strong>
          <span>${item.value}</span>
        </article>
      `,
    )
    .join("");
}

function renderFocusAreas() {
  const root = document.getElementById("focus-areas");
  root.innerHTML = portfolio.focusAreas
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");
}

function renderExperience() {
  const root = document.getElementById("experience-list");
  root.innerHTML = portfolio.experience
    .map(
      (item) => `
        <article class="timeline-card">
          <p class="label">${item.company}</p>
          <h3>${item.role}</h3>
          <p class="meta">${item.dates}</p>
          <ul>
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  const root = document.getElementById("project-list");
  root.innerHTML = portfolio.projects
    .map(
      (item) => `
        <article class="project-card">
          <p class="label">${item.subtitle}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="project-tags">
            ${item.highlights.map((point) => `<span class="tag">${point}</span>`).join("")}
          </div>
          ${
            item.links && item.links.length
              ? `
            <div class="project-actions">
              ${item.links
                .map(
                  (link) => `
                    <a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
                  `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        </article>
      `,
    )
    .join("");
}

function renderStack(listId, items) {
  const root = document.getElementById(listId);
  root.innerHTML = items
    .map(
      (item) => `
        <article class="stack-card">
          <div class="stack-head">
            <div class="stack-title-group">
              <strong>${item.title}</strong>
              <p class="meta">${item.meta}</p>
            </div>
            ${
              item.certificateHref && item.verifyHref
                ? `
              <div class="stack-actions">
                <button
                  class="mini-link"
                  type="button"
                  data-certificate="${item.certificateHref}"
                  data-title="${item.title}"
                  data-preview-label="Certificate Preview"
                >
                  Certificate
                </button>
                <a class="mini-link" href="${item.verifyHref}" target="_blank" rel="noreferrer">Verify</a>
              </div>
            `
                : ""
            }
          </div>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function setupCertificateModal() {
  const modal = document.getElementById("certificate-modal");
  const frame = document.getElementById("certificate-frame");
  const kicker = document.getElementById("modal-kicker");
  const title = document.getElementById("modal-title");
  const closeButton = document.getElementById("modal-close");

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    frame.src = "";
    document.body.style.overflow = "";
  }

  function openModal(certificateUrl, certificateTitle, previewLabel) {
    kicker.textContent = previewLabel || "Preview";
    title.textContent = certificateTitle;
    frame.src = certificateUrl;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-certificate]");
    if (trigger) {
      openModal(
        trigger.dataset.certificate,
        trigger.dataset.title || "Preview",
        trigger.dataset.previewLabel || "Preview",
      );
      return;
    }

    if (event.target === modal || event.target === closeButton) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function renderSkills() {
  const root = document.getElementById("skill-list");
  root.innerHTML = portfolio.skills
    .map(
      (item) => `
        <article class="skill-card">
          <strong>${item.title}</strong>
          <div class="skill-chip-row">
            ${item.items.map((skill) => `<span class="skill-chip">${skill}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderContacts() {
  const root = document.getElementById("contact-links");
  root.innerHTML = portfolio.contacts
    .map(
      (item) => `
        ${
          item.label === "Resume"
            ? `
          <button
            class="contact-link"
            type="button"
            data-certificate="${item.href}"
            data-title="Resume"
            data-preview-label="Resume Preview"
          >
            ${item.label}
          </button>
        `
            : `
          <a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
            ${item.label}
          </a>
        `
        }
      `,
    )
    .join("");
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  setText("summary", portfolio.summary);
  setText("focus-copy", portfolio.focusCopy);
  setText("profile-copy", portfolio.profileCopy);
  setText("contact-copy", portfolio.contactCopy);
  renderSignals();
  renderFocusAreas();
  renderExperience();
  renderProjects();
  renderStack("education-list", portfolio.education);
  renderStack("certification-list", portfolio.certifications);
  renderSkills();
  renderContacts();
  setupCertificateModal();
  revealOnScroll();
}

init();
