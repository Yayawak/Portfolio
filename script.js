const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const techIcons = {
  'React.js': 'https://cdn.simpleicons.org/react',
  React: 'https://cdn.simpleicons.org/react',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs',
  Flutter: 'https://cdn.simpleicons.org/flutter',
  Go: 'https://cdn.simpleicons.org/go',
  'Java Spring Boot': 'https://cdn.simpleicons.org/spring',
  Docker: 'https://cdn.simpleicons.org/docker',
  'CI/CD': 'https://cdn.simpleicons.org/githubactions',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql',
  MySQL: 'https://cdn.simpleicons.org/mysql',
  Redis: 'https://cdn.simpleicons.org/redis',
  MongoDB: 'https://cdn.simpleicons.org/mongodb',
  SQLite: 'https://cdn.simpleicons.org/sqlite',
  'RESTful APIs': 'https://cdn.simpleicons.org/openapiinitiative',
  WebSocket: 'https://cdn.simpleicons.org/socketdotio',
  RabbitMQ: 'https://cdn.simpleicons.org/rabbitmq',
  ORM: 'https://cdn.simpleicons.org/prisma',
  Tailwind: 'https://cdn.simpleicons.org/tailwindcss',
  Bootstrap: 'https://cdn.simpleicons.org/bootstrap',
  MaterialUI: 'https://cdn.simpleicons.org/materialdesign',
  SvelteKit: 'https://cdn.simpleicons.org/svelte',
  TypeScript: 'https://cdn.simpleicons.org/typescript',
  JavaScript: 'https://cdn.simpleicons.org/javascript',
  Java: 'https://cdn.simpleicons.org/openjdk',
  Python: 'https://cdn.simpleicons.org/python',
  Kotlin: 'https://cdn.simpleicons.org/kotlin',
  Dart: 'https://cdn.simpleicons.org/dart',
  Shell: 'https://cdn.simpleicons.org/gnubash',
  SQL: 'https://cdn.simpleicons.org/postgresql',
  Linux: 'https://cdn.simpleicons.org/linux',
  Nginx: 'https://cdn.simpleicons.org/nginx',
  DigitalOcean: 'https://cdn.simpleicons.org/digitalocean',
  Git: 'https://cdn.simpleicons.org/git',
  GitHub: 'https://cdn.simpleicons.org/github',
  OpenAI: 'https://cdn.simpleicons.org/openai',
  default: 'https://cdn.simpleicons.org/stackshare'
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
    { label: '(+66) 96-734-9476', href: 'tel:+66967349476', icon: 'https://cdn.simpleicons.org/phone' },
    { label: 'apisitthaweboon@gmail.com', href: 'mailto:apisitthaweboon@gmail.com', icon: 'https://cdn.simpleicons.org/gmail' },
    { label: 'Bangkok, Thailand', href: '#contact', icon: 'https://cdn.simpleicons.org/googlemaps' },
    { label: 'github.com/Yayawak', href: 'https://github.com/Yayawak', icon: 'https://cdn.simpleicons.org/github' }
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
