const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();

    const grid = document.getElementById('project-grid');
    if (grid) {
      grid.innerHTML = projects.map((project) => `
        <article class="project-card">
          <img class="project-preview" src="${project.image}" alt="${project.title}" />
          <h3>${project.title}</h3>
          <p>${project.short}</p>
          <div class="tag-row">
            ${project.stack.slice(0, 4).map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          <a class="text-link" href="project.html?id=${project.id}">View case study →</a>
        </article>
      `).join('');
    }

    const projectId = new URLSearchParams(window.location.search).get('id');
    if (projectId) {
      const project = projects.find((item) => item.id === projectId);
      const title = document.getElementById('project-title');
      const summary = document.getElementById('project-summary');
      const meta = document.getElementById('project-meta');
      const description = document.getElementById('project-description');
      const stack = document.getElementById('project-stack');
      const highlights = document.getElementById('project-highlights');

      if (project && title && summary && meta && description && stack && highlights) {
        document.title = `${project.title} | Apisit Thaweboon`;
        title.textContent = project.title;
        summary.textContent = project.summary;
        meta.innerHTML = `<span>${project.year}</span>`;
        description.innerHTML = project.description.map((item) => `<li>${item}</li>`).join('');
        stack.innerHTML = project.stack.map((tech) => `<span>${tech}</span>`).join('');
        highlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');
      }
    }
  } catch (error) {
    console.error('Failed to load projects', error);
  }
}

loadProjects();
