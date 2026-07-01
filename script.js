const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const techIcons = {
  'React.js': 'https://cdn.simpleicons.org/react/61dafb',
  React: 'https://cdn.simpleicons.org/react/61dafb',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4fc08d',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  Flutter: 'https://cdn.simpleicons.org/flutter/02569b',
  Golang: 'https://cdn.simpleicons.org/go/00add8',
  'Java Spring Boot': 'https://cdn.simpleicons.org/spring/6db33f',
  Docker: 'https://cdn.simpleicons.org/docker/2496ed',
  'CI/CD': 'https://cdn.simpleicons.org/githubactions/2088ff',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4169e1',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479a1',
  Redis: 'https://cdn.simpleicons.org/redis/dc382d',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/47a248',
  SQLite: 'https://cdn.simpleicons.org/sqlite/003b57',
  'RESTful APIs': 'https://cdn.simpleicons.org/openapiinitiative/6ba539',
  WebSocket: 'https://cdn.simpleicons.org/socketdotio/010101',
  RabbitMQ: 'https://cdn.simpleicons.org/rabbitmq/ff6600',
  ORM: 'https://cdn.simpleicons.org/prisma/2d3748',
  Tailwind: 'https://cdn.simpleicons.org/tailwindcss/06b6d4',
  Bootstrap: 'https://cdn.simpleicons.org/bootstrap/7952b3',
  MaterialUI: 'https://cdn.simpleicons.org/materialdesign/0081cb',
  SvelteKit: 'https://cdn.simpleicons.org/svelte/ff3e00',
  TypeScript: 'https://cdn.simpleicons.org/typescript/3178c6',
  JavaScript: 'https://cdn.simpleicons.org/javascript/f7df1e',
  Java: 'https://cdn.simpleicons.org/openjdk/ed8b00',
  Python: 'https://cdn.simpleicons.org/python/3776ab',
  Kotlin: 'https://cdn.simpleicons.org/kotlin/7f52ff',
  Dart: 'https://cdn.simpleicons.org/dart/0175c2',
  Shell: 'https://cdn.simpleicons.org/gnubash/4eaa25',
  SQL: 'https://cdn.simpleicons.org/postgresql/4169e1',
  Linux: 'https://cdn.simpleicons.org/linux/fcc624',
  Nginx: 'https://cdn.simpleicons.org/nginx/009639',
  DigitalOcean: 'https://cdn.simpleicons.org/digitalocean/0080ff',
  Git: 'https://cdn.simpleicons.org/git/f05032',
  GitHub: 'https://cdn.simpleicons.org/github/181717',
  OpenAI: 'https://cdn.simpleicons.org/openai/412991',
  default: 'https://cdn.simpleicons.org/stackshare/0f172a'
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
    { label: '(+66) 96-734-9476', href: 'tel:+66967349476', icon: 'https://cdn.simpleicons.org/githubsponsors/34d399' },
    { label: 'apisitthaweboon@gmail.com', href: 'mailto:apisitthaweboon@gmail.com', icon: 'https://cdn.simpleicons.org/gmail/d14836' },
    { label: 'Bangkok, Thailand', href: '#contact', icon: 'https://cdn.simpleicons.org/googlemaps/4285f4' },
    { label: 'github.com/Yayawak', href: 'https://github.com/Yayawak', icon: 'https://cdn.simpleicons.org/github/181717' }
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
    { title: 'Backend & APIs', items: ['RESTful APIs', 'WebSocket', 'RabbitMQ', 'Redis', 'ORM', 'Java Spring Boot', 'Node.js'] },
    { title: 'Languages', items: ['Golang', 'Java', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'Dart', 'Shell', 'SQL'] },
    { title: 'Databases & DevOps', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'DigitalOcean', 'Git', 'GitHub'] }
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
