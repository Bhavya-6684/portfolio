/* ============================================================
   PARTICLES.JS — Interactive Canvas Particle System
   ============================================================ */

class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -9999, y: -9999 };
    this.count = this._getCount();
    this.animId = null;

    this._resize();
    this._initParticles();
    this._bindEvents();
    this._animate();
  }

  _getCount() {
    const w = window.innerWidth;
    if (w < 768) return 40;
    if (w < 1200) return 80;
    return 120;
  }

  _resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _initParticles() {
    this.particles = [];
    for (let i = 0; i < this.count; i++) {
      this.particles.push(this._createParticle());
    }
  }

  _createParticle(x, y) {
    return {
      x: x ?? Math.random() * this.canvas.width,
      y: y ?? Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 215 : 265, // blue or purple
      pulse: Math.random() * Math.PI * 2,
    };
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this._resize();
      this._initParticles();
    });

    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
    });
  }

  _drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  _animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p) => {
      // Mouse repulsion
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        p.vx += (dx / dist) * force * 0.3;
        p.vy += (dy / dist) * force * 0.3;
      }

      // Velocity damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Max velocity
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 2) {
        p.vx = (p.vx / speed) * 2;
        p.vy = (p.vy / speed) * 2;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      // Wrap around edges
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Draw particle
      const size = p.size + Math.sin(p.pulse) * 0.5;
      const alpha = p.opacity + Math.sin(p.pulse * 0.5) * 0.05;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha})`;
      this.ctx.fill();
    });

    this._drawConnections();
    this.animId = requestAnimationFrame(() => this._animate());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

window.ParticleSystem = ParticleSystem;
