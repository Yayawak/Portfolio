const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const techIcons = {
  'React.js': '⚛️',
  React: '⚛️',
  'Next.js': '⚡',
  'Vue.js': '🖼️',
  'Node.js': '🟢',
  Flutter: '📱',
  Go: '🧠',
  'Java Spring Boot': '☕',
  Docker: '🐳',
  'CI/CD': '🚀',
  PostgreSQL: '🗄️',
  MySQL: '🗄️',
  Redis: '⚡',
  MongoDB: '🧱',
  SQLite: '🧾',
  'RESTful APIs': '🔗',
  'WebSocket': '🔄',
  RabbitMQ: '📬',
  ORM: '🧩',
  Tailwind: '🎨',
  Bootstrap: '🧰',
  MaterialUI: '🧱',
  SvelteKit: '✨',
  TypeScript: '⌨️',
  JavaScript: '📜',
  Java: '☕',
  Python: '🐍',
  Kotlin: '🧩',
  Dart: '🎯',
  Shell: '💻',
  SQL: '🧾',
  Linux: '🐧',
  Nginx: '🌐',
  DigitalOcean: '☁️',
  Git: '🧾',
  GitHub: '💻',
  'OpenAI': '🤖',
  default: '🛠️'
};

function renderTechChips(items) {
  return items.map((tech) => {
    const icon = techIcons[tech] || techIcons.default;
    return `<span class="tech-chip" title="${tech}" aria-label="${tech}"><span class="tech-icon">${icon}</span></span>`;
  }).join('');
}

function renderContactLinks() {
  const container = document.getElementById('contact-block');
  if (!container) return;

  const contacts = [
    { label: '(+66) 96-734-9476', href: 'tel:+66967349476', icon: '📞' },
    { label: 'apisitthaweboon@gmail.com', href: 'mailto:apisitthaweboon@gmail.com', icon: '✉️' },
    { label: 'Bangkok, Thailand', href: '#contact', icon: '📍' },
    { label: 'github.com/Yayawak', href: 'https://github.com/Yayawak', icon: '💻' }
  ];

  container.innerHTML = contacts.map((item) => `
    <a class="contact-link" href="${item.href}" target="${item.href.startsWith('http') ? '_blank' : '_self'}" rel="noreferrer">
      <span class="contact-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');
}

function renderSkillGroups() {
  const container = document.getElementById('stack-grid');
  if (!container) return;

  const groups = [
    { title: 'Frontend', items: ['Flutter', 'React.js', 'Next.js', 'Vue.js', 'Node.js', 'Tailwind', 'Bootstrap', 'MaterialUI', 'SvelteKit'] },
    { title: 'Backend & APIs', items: ['RESTful APIs', 'Micro-services', 'WebSocket', 'RabbitMQ', 'Redis', 'ORM', 'Java Spring Boot', 'Node.js'] },
    { title: 'Languages', items: ['Golang', 'Java', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'Dart', 'Shell', 'SQL'] },
    { title: 'Databases & DevOps', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Docker', 'Docker Compose', 'CI/CD', 'Linux', 'Nginx', 'DigitalOcean', 'Git', 'GitHub'] }
  ];

  container.innerHTML = groups.map((group) => `
    <div class="stack-card">
      <h3>${group.title}</h3>
      <div class="pill-list">${renderTechChips(group.items)}</div>
    </div>
  `).join('');
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
          <div class="tag-row">${renderTechChips(project.stack.slice(0, 4))}</div>
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
        stack.innerHTML = renderTechChips(project.stack);
        highlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');
      }
    }
  } catch (error) {
    console.error('Failed to load projects', error);
  }
}

renderContactLinks();
renderSkillGroups();
loadProjects();
