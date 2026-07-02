const techIcons = {
  'React.js': 'https://cdn.simpleicons.org/react/61dafb',
  React: 'https://cdn.simpleicons.org/react/61dafb',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4fc08d',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  Flutter: 'https://cdn.simpleicons.org/flutter/02569b',
  Golang: 'https://cdn.simpleicons.org/go/00add8',
  'Java Spring Boot': 'https://cdn.simpleicons.org/spring/6db33f',
  'Spring Boot': 'https://cdn.simpleicons.org/spring/6db33f',
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

const icons = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>'
};

const CONTACTS = [
  { label: '(+66) 96-734-9476', href: 'tel:+66967349476', icon: icons.phone, social: true },
  { label: 'apisitthaweboon@gmail.com', href: 'mailto:apisitthaweboon@gmail.com', icon: icons.mail, social: true },
  { label: 'Bangkok, Thailand', href: '#contact', icon: icons.pin, social: false },
  { label: 'github.com/Yayawak', href: 'https://github.com/Yayawak', icon: icons.github, social: true }
];

function renderTechChips(items) {
  return items.map((tech) => {
    const icon = techIcons[tech] || techIcons.default;
    return `<span class="tech-chip" title="${tech}" aria-label="${tech}"><img class="tech-icon" src="${icon}" alt="${tech}" loading="lazy" /></span>`;
  }).join('');
}

function renderContactLinks(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = CONTACTS.map((item) => `
    <a class="contact-link" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
      <span class="contact-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');
}

function renderSocialIcons(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = CONTACTS.filter((item) => item.social).map((item) => `
    <a class="social-icon" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''} aria-label="${item.label}">
      ${item.icon}
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
    <div class="stack-card" data-reveal>
      <h3>${group.title}</h3>
      <div class="pill-list">${renderTechChips(group.items)}</div>
    </div>
  `).join('');

  observeReveal(container);
}

function renderTimeline(projects) {
  const container = document.getElementById('timeline');
  if (!container) return;

  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

  container.innerHTML = sorted.map((project) => `
    <div class="timeline-item" data-reveal>
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-head">
          <h3>${project.title}</h3>
          <span class="timeline-date">${project.year}</span>
        </div>
        <span class="timeline-role">${project.role}</span>
        <p>${project.short}</p>
        <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  observeReveal(container);
}

function placeholderMarkup() {
  return `
    <div class="img-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      <span>Coming Soon</span>
    </div>
  `;
}

function imageWithFallback(src, alt, className) {
  return `<span class="media-fallback"><img src="${src}" alt="${alt}" class="${className || ''}" loading="lazy" onerror="this.parentElement.innerHTML = window.__placeholderMarkup()" /></span>`;
}
window.__placeholderMarkup = placeholderMarkup;

function projectImagePath(project, filename) {
  return `assets/projects/${project.slug}/${filename}`;
}

function renderProjectCard(project) {
  const cover = projectImagePath(project, project.images[0]);
  return `
    <a class="project-card" href="project.html?id=${project.slug}" data-reveal>
      <div class="project-thumb">
        ${imageWithFallback(cover, `${project.title} cover`)}
        <div class="project-thumb-tag">
          <span>${project.tags[0]}</span>
          <span>${project.year}</span>
        </div>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <div class="tag-row">${project.stack.slice(0, 4).map((tech) => `<span>${tech}</span>`).join('')}</div>
        <span class="project-cta">View case study →</span>
      </div>
    </a>
  `;
}

function renderProjectGallery(project) {
  const container = document.getElementById('project-gallery');
  if (!container) return;

  const images = project.images.map((filename) => projectImagePath(project, filename));

  container.innerHTML = `
    <div class="project-gallery-frame">
      <div class="project-gallery-track">
        ${images.map((src, index) => `
          <figure class="project-gallery-slide${index === 0 ? ' is-active' : ''}">
            ${imageWithFallback(src, `${project.title} screenshot ${index + 1}`)}
          </figure>
        `).join('')}
      </div>
      ${images.length > 1 ? `
        <button class="project-gallery-arrow prev" type="button" aria-label="Previous image">‹</button>
        <button class="project-gallery-arrow next" type="button" aria-label="Next image">›</button>
      ` : ''}
    </div>
    ${images.length > 1 ? `
      <div class="project-gallery-thumbs">
        ${images.map((src, index) => `
          <button class="project-gallery-thumb${index === 0 ? ' is-active' : ''}" type="button" data-index="${index}" aria-label="Show image ${index + 1}">
            ${imageWithFallback(src, `${project.title} thumbnail ${index + 1}`)}
          </button>
        `).join('')}
      </div>
    ` : ''}
  `;

  if (images.length <= 1) return;

  const slides = Array.from(container.querySelectorAll('.project-gallery-slide'));
  const thumbs = Array.from(container.querySelectorAll('.project-gallery-thumb'));
  let currentIndex = 0;
  let timer = null;

  const update = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === currentIndex));
    thumbs.forEach((thumb, index) => thumb.classList.toggle('is-active', index === currentIndex));
  };

  const restartTimer = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => update(currentIndex + 1), 4500);
  };

  container.querySelector('.prev')?.addEventListener('click', () => { update(currentIndex - 1); restartTimer(); });
  container.querySelector('.next')?.addEventListener('click', () => { update(currentIndex + 1); restartTimer(); });
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => { update(Number(thumb.dataset.index)); restartTimer(); });
  });

  restartTimer();
}

function renderProjectSwitch(projects, currentSlug) {
  const container = document.getElementById('project-switch');
  if (!container) return;

  const index = projects.findIndex((item) => item.slug === currentSlug);
  if (index === -1) return;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  container.innerHTML = `
    <a class="project-switch-link prev" href="project.html?id=${prev.slug}">
      <span class="project-switch-label">← Previous</span>
      <span class="project-switch-title">${prev.title}</span>
    </a>
    <a class="project-switch-link next" href="project.html?id=${next.slug}">
      <span class="project-switch-label">Next →</span>
      <span class="project-switch-title">${next.title}</span>
    </a>
  `;
}

function renderProjectLinks(project) {
  const container = document.getElementById('project-links');
  if (!container) return;

  const buttons = [];
  if (project.demo) {
    buttons.push(`<a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noreferrer">${icons.external} Visit Live Demo</a>`);
  }
  if (project.github) {
    buttons.push(`<a class="btn btn-secondary" href="${project.github}" target="_blank" rel="noreferrer">${icons.github} Source Code</a>`);
  }
  container.innerHTML = buttons.join('');
}

async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();

    const grid = document.getElementById('project-grid');
    if (grid) {
      grid.innerHTML = projects.map(renderProjectCard).join('');
      observeReveal(grid);
    }

    renderTimeline(projects);

    const projectSlug = new URLSearchParams(window.location.search).get('id');
    if (projectSlug) {
      const project = projects.find((item) => item.slug === projectSlug);
      if (!project) return;

      document.title = `${project.title} | Apisit Thaweboon`;
      document.getElementById('project-title').textContent = project.title;
      document.getElementById('project-summary').textContent = project.summary;
      document.getElementById('project-meta').innerHTML = `
        <span class="meta-tag">${project.tags[0]}</span>
        <span>${project.year}</span>
        <span>${project.role}</span>
      `;
      document.getElementById('project-overview').textContent = project.overview;
      document.getElementById('project-features').innerHTML = project.features.map((item) => `<li>${item}</li>`).join('');
      document.getElementById('project-architecture').textContent = project.architecture;
      document.getElementById('project-challenges').innerHTML = project.challenges.map((item) => `<li>${item}</li>`).join('');
      document.getElementById('project-process').innerHTML = project.process.map((item) => `<li>${item}</li>`).join('');
      document.getElementById('project-lessons').innerHTML = project.lessons.map((item) => `<li>${item}</li>`).join('');
      document.getElementById('project-stack').innerHTML = renderTechChips(project.stack);
      document.getElementById('project-highlights').innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join('');

      renderProjectLinks(project);
      renderProjectGallery(project);
      renderProjectSwitch(projects, project.slug);
      observeReveal(document);
    }
  } catch (error) {
    console.error('Failed to load projects', error);
  }
}

/* Nav: mobile toggle, active section, hide on scroll, progress bar */

function initNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const navWrap = document.getElementById('nav-wrap');
  const progress = document.getElementById('nav-progress');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && docHeight > 0) {
      progress.style.width = `${Math.min(100, (scrollY / docHeight) * 100)}%`;
    }
    if (navWrap) {
      if (scrollY > lastScrollY && scrollY > 160) {
        navWrap.classList.add('is-hidden');
      } else {
        navWrap.classList.remove('is-hidden');
      }
    }
    lastScrollY = scrollY;
  }, { passive: true });

  const navLinks = Array.from(document.querySelectorAll('#nav-links a'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }
}

/* Hero: rotating role text, mouse parallax */

function initHeroRoles() {
  const roles = document.querySelectorAll('.hero-role');
  if (!roles.length) return;
  let index = 0;
  setInterval(() => {
    roles[index].classList.remove('is-active');
    index = (index + 1) % roles.length;
    roles[index].classList.add('is-active');
  }, 2600);
}

function initHeroParallax() {
  const blobs = document.querySelectorAll('[data-parallax]');
  const hero = document.querySelector('.hero');
  if (!blobs.length || !hero) return;

  hero.addEventListener('mousemove', (event) => {
    const { innerWidth, innerHeight } = window;
    const relX = (event.clientX / innerWidth) - 0.5;
    const relY = (event.clientY / innerHeight) - 0.5;
    blobs.forEach((blob) => {
      const strength = Number(blob.dataset.parallax) || 0;
      blob.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    });
  });
}

/* Reveal-on-scroll, count-up stats, skill bars */

let revealObserver;

function observeReveal(root = document) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }

  root.querySelectorAll('[data-reveal]:not(.is-visible), [data-reveal-group]:not(.is-visible)').forEach((el) => {
    revealObserver.observe(el);
  });
}

function initCountUp() {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';
      const duration = 1200;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(progress * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach((el) => observer.observe(el));
}

function initSkillBars() {
  const skillsCard = document.querySelector('.about-skills');
  if (!skillsCard) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.bar > div').forEach((bar) => {
        bar.style.width = bar.dataset.barWidth;
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  observer.observe(skillsCard);
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroRoles();
  initHeroParallax();
  initCountUp();
  initSkillBars();
  observeReveal(document);
  renderContactLinks('contact-block');
  renderContactLinks('contact-links');
  renderSocialIcons('hero-socials');
  renderSocialIcons('footer-socials');
  renderSkillGroups();
  loadProjects();
});
