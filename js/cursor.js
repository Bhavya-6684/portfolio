/* ============================================================
   CURSOR.JS — Custom Cursor & Mouse Parallax
   ============================================================ */

class CustomCursor {
  constructor() {
    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    this.pos  = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };

    if (!this.dot || !this.ring) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // touch devices

    this._bindEvents();
    this._animate();
  }

  _bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.pos.x = e.clientX;
      this.pos.y = e.clientY;
      this.dot.style.left = e.clientX + 'px';
      this.dot.style.top  = e.clientY + 'px';
    });

    // Hover effect on interactive elements
    const targets = document.querySelectorAll('a, button, .skill-card, .project-card, .blog-card, .achievement-card');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => this.ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => this.ring.classList.remove('hovered'));
    });
  }

  _animate() {
    // Smooth lag for ring
    this.ringPos.x += (this.pos.x - this.ringPos.x) * 0.12;
    this.ringPos.y += (this.pos.y - this.ringPos.y) * 0.12;
    this.ring.style.left = this.ringPos.x + 'px';
    this.ring.style.top  = this.ringPos.y + 'px';
    requestAnimationFrame(() => this._animate());
  }
}

/* ── Mouse Parallax for Hero ── */
function initMouseParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const shapes = hero.querySelectorAll('.geo-shape');
  const orbs   = hero.querySelectorAll('.hero-gradient-orb');

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top  - rect.height / 2;

    shapes.forEach((shape, i) => {
      const depth = (i + 1) * 0.008;
      shape.style.transform = `translate(${cx * depth}px, ${cy * depth}px) rotate(${15 + i * 10}deg)`;
    });

    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 0.004;
      orb.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    shapes.forEach((shape, i) => {
      shape.style.transform = '';
    });
  });
}

window.CustomCursor = CustomCursor;
window.initMouseParallax = initMouseParallax;
