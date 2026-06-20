/* ============================================================
   ANIMATIONS.JS — Scroll Reveals, Skill Bars, Tech Ecosystem
   ============================================================ */

/* ── Scroll Reveal Observer ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  });

  reveals.forEach((el) => observer.observe(el));
}

/* ── Skill Bar Animations ── */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width || '0%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach((bar) => observer.observe(bar));
}

/* ── Skills Tab Filter ── */
function initSkillsTabs() {
  const tabs   = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => {
        p.style.display = 'none';
        p.style.opacity = '0';
      });

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.panel);
      if (target) {
        target.style.display = 'grid';
        setTimeout(() => { target.style.opacity = '1'; }, 10);
      }
    });
  });

  // Activate first tab
  if (tabs[0]) tabs[0].click();
}

/* ── Project Modal ── */
function initProjectModals() {
  const overlay = document.getElementById('project-modal');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.modal-close');
  const title    = overlay.querySelector('#modal-title');
  const body     = overlay.querySelector('#modal-body');

  document.querySelectorAll('[data-modal]').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Don't open modal when clicking links
      const id = card.dataset.modal;
      const data = window.projectData?.[id];
      if (!data) return;

      title.textContent = data.title;
      body.innerHTML = data.content;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ── Tech Ecosystem Orbiting Icons ── */
function initTechEcosystem() {
  const orbits = document.querySelectorAll('.tech-orbit');

  orbits.forEach((orbit) => {
    const icons = orbit.querySelectorAll('.tech-icon-node');
    icons.forEach((icon, i) => {
      const angle  = (360 / icons.length) * i;
      const radius = orbit.offsetWidth / 2;
      const rad    = (angle * Math.PI) / 180;
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);
      icon.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  });
}

/* ── Active Nav Link on Scroll ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((s) => observer.observe(s));
}

/* ── Navbar Scroll Behavior ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar?.classList.toggle('scrolled', scrolled);
    backTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Mobile Nav ── */
function initMobileNav() {
  const toggle  = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileLinks = mobileNav?.querySelectorAll('.nav-link');

  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileNav?.classList.toggle('open');
    document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Smooth Scroll for all anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const origText = btn.textContent;
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
      btn.textContent = origText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ── Tilt effect on project cards ── */
function initTilt() {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

window.initScrollReveal  = initScrollReveal;
window.initSkillBars     = initSkillBars;
window.initSkillsTabs    = initSkillsTabs;
window.initProjectModals = initProjectModals;
window.initTechEcosystem = initTechEcosystem;
window.initActiveNav     = initActiveNav;
window.initNavbar        = initNavbar;
window.initMobileNav     = initMobileNav;
window.initSmoothScroll  = initSmoothScroll;
window.initContactForm   = initContactForm;
window.initTilt          = initTilt;
