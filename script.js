const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const techIcons = {
  'React.js': 'https://cdn.simpleicons.org/react/4dd4c0',
  React: 'https://cdn.simpleicons.org/react/4dd4c0',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/4dd4c0',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4dd4c0',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/4dd4c0',
  Flutter: 'https://cdn.simpleicons.org/flutter/4dd4c0',
  Go: 'https://cdn.simpleicons.org/go/4dd4c0',
  'Java Spring Boot': 'https://cdn.simpleicons.org/spring/4dd4c0',
  Docker: 'https://cdn.simpleicons.org/docker/4dd4c0',
  'CI/CD': 'https://cdn.simpleicons.org/githubactions/4dd4c0',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4dd4c0',
  MySQL: 'https://cdn.simpleicons.org/mysql/4dd4c0',
  Redis: 'https://cdn.simpleicons.org/redis/4dd4c0',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/4dd4c0',
  SQLite: 'https://cdn.simpleicons.org/sqlite/4dd4c0',
  'RESTful APIs': 'https://cdn.simpleicons.org/openapiinitiative/4dd4c0',
  WebSocket: 'https://cdn.simpleicons.org/socketdotio/4dd4c0',
  RabbitMQ: 'https://cdn.simpleicons.org/rabbitmq/4dd4c0',
  ORM: 'https://cdn.simpleicons.org/prisma/4dd4c0',
  Tailwind: 'https://cdn.simpleicons.org/tailwindcss/4dd4c0',
  Bootstrap: 'https://cdn.simpleicons.org/bootstrap/4dd4c0',
  MaterialUI: 'https://cdn.simpleicons.org/materialdesign/4dd4c0',
  SvelteKit: 'https://cdn.simpleicons.org/svelte/4dd4c0',
  TypeScript: 'https://cdn.simpleicons.org/typescript/4dd4c0',
  JavaScript: 'https://cdn.simpleicons.org/javascript/4dd4c0',
  Java: 'https://cdn.simpleicons.org/openjdk/4dd4c0',
  Python: 'https://cdn.simpleicons.org/python/4dd4c0',
  Kotlin: 'https://cdn.simpleicons.org/kotlin/4dd4c0',
  Dart: 'https://cdn.simpleicons.org/dart/4dd4c0',
  Shell: 'https://cdn.simpleicons.org/gnubash/4dd4c0',
  SQL: 'https://cdn.simpleicons.org/postgresql/4dd4c0',
  Linux: 'https://cdn.simpleicons.org/linux/4dd4c0',
  Nginx: 'https://cdn.simpleicons.org/nginx/4dd4c0',
  DigitalOcean: 'https://cdn.simpleicons.org/digitalocean/4dd4c0',
  Git: 'https://cdn.simpleicons.org/git/4dd4c0',
  GitHub: 'https://cdn.simpleicons.org/github/4dd4c0',
  OpenAI: 'https://cdn.simpleicons.org/openai/4dd4c0',
  default: 'https://cdn.simpleicons.org/stackshare/4dd4c0'
};

function renderTechChips(items) {
  return items.map((tech) => {
    const icon = techIcons[tech] || techIcons.default;
    return `<span class="tech-chip" title="${tech}" aria-label="${tech}"><img class="tech-icon" src="${icon}" alt="${tech}" /></span>`;
  }).join('');
}

function renderContactLinks() {
  const container = document.getElementById('contact-block');
  if (!container) return;

  const contacts = [
    { label: '(+66) 96-734-9476', href: 'tel:+66967349476', icon: 'https://cdn.simpleicons.org/phone/4dd4c0' },
    { label: 'apisitthaweboon@gmail.com', href: 'mailto:apisitthaweboon@gmail.com', icon: 'https://cdn.simpleicons.org/gmail/4dd4c0' },
    { label: 'Bangkok, Thailand', href: '#contact', icon: 'https://cdn.simpleicons.org/googlemaps/4dd4c0' },
    { label: 'github.com/Yayawak', href: 'https://github.com/Yayawak', icon: 'https://cdn.simpleicons.org/github/4dd4c0' }
  ];

  container.innerHTML = contacts.map((item) => `
    <a class="contact-link" href="${item.href}" target="${item.href.startsWith('http') ? '_blank' : '_self'}" rel="noreferrer">
      <img class="contact-icon" src="${item.icon}" alt="${item.label}" />
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
