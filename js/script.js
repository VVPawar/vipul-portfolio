// Render Experience with structured containers
document.getElementById("experience-content").innerHTML = portfolioData.experience.map(exp => `
  <div class="card experience-card">
    <div class="exp-header">
      <h3>${exp.company}</h3>
      <p><strong>${exp.role}</strong></p>
      <p class="exp-duration">${exp.duration}</p>
    </div>

    <div class="exp-body">
      <h4>Responsibilities</h4>
      <p>${exp.details}</p>
    </div>

    ${exp.projects && exp.projects.length > 0 ? `
      <div class="exp-projects">
        <h4>Key Projects</h4>
        <ul>
          ${exp.projects.map(proj => `
            <li>
              <strong>${proj.name}:</strong> ${proj.description}
            </li>
          `).join("")}
        </ul>
      </div>
    ` : ""}
  </div>
`).join("");

// Render Education with structured containers
document.getElementById("education-content").innerHTML = portfolioData.education.map(edu => `
  <div class="card education-card">
    <div class="edu-header">
      <h3>${edu.school}</h3>
      <p><strong>${edu.degree}</strong></p>
      <p class="edu-duration">${edu.duration}</p>
    </div>

    <div class="edu-body">
      <h4>Details</h4>
      <p>${edu.details}</p>
    </div>

    <div class="edu-activities">
      <h4>Activities</h4>
      <ul>
        ${edu.activities.split("–").map(act => act.trim()).filter(act => act).map(act => `<li>${act}</li>`).join("")}
      </ul>
    </div>

    ${edu.projects && edu.projects.length > 0 ? `
      <div class="edu-projects">
        <h4>Key Academic Projects</h4>
        <ul>
          ${edu.projects.map(proj => `
            <li><strong>${proj.name}:</strong> ${proj.description}</li>
          `).join("")}
        </ul>
      </div>
    ` : ""}
  </div>
`).join("");

// Render Skills with badges
document.getElementById("skills-content").innerHTML = portfolioData.skills.map(skill => `
  <div class="skill-card">
    <h4>${skill.name}</h4>
    <p>${skill.details}</p>
  </div>
`).join("");

// Render Projects with structured layout
document.getElementById("projects-content").innerHTML = portfolioData.projects.map(proj => `
  <div class="card project-card">
    <div class="proj-header">
      <h3>${proj.name}</h3>
      <span class="project-label ${proj.context.includes("Academic") ? "academic" : "professional"}">
        ${proj.context}
      </span>
    </div>

    <div class="proj-body">
      <p><strong>Role:</strong> ${proj.role}</p>
      <p><strong>Duration:</strong> ${proj.duration}</p>
      <p><strong>Domain:</strong> ${proj.domain}</p>
      <p><strong>Technology:</strong> ${proj.technology}</p>
    </div>

    <div class="proj-details">
      <h4>Description</h4>
      <p>${proj.details}</p>
    </div>
  </div>
`).join("");

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Auto-hide when clicking outside the menu (works on both desktop & mobile)
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// Auto-hide when tapping a link (important for mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/*
//Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Auto-hide when mouse leaves the menu area
navLinks.addEventListener("mouseleave", () => {
  navLinks.classList.remove("active");
});

// Auto-hide when clicking outside the menu
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});*/
