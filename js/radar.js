/* ============================================================
   RADAR.JS — Skills Radar Chart on Canvas
   ============================================================ */

class RadarChart {
  constructor(canvasId, data, opts = {}) {
    this.canvas  = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx     = this.canvas.getContext('2d');
    this.data    = data;
    this.levels  = opts.levels  ?? 5;
    this.maxVal  = opts.maxVal  ?? 100;
    this.color   = opts.color   ?? { stroke: '#3B82F6', fill: 'rgba(59,130,246,0.12)', web: 'rgba(255,255,255,0.06)' };
    this.animated = false;
    this.progress = 0;

    this._setupCanvas();
    this._observeAndAnimate();
  }

  _setupCanvas() {
    const size = Math.min(this.canvas.parentElement?.offsetWidth ?? 400, 380);
    this.canvas.width  = size;
    this.canvas.height = size;
    this.cx = size / 2;
    this.cy = size / 2;
    this.radius = size * 0.38;
  }

  _observeAndAnimate() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this._animate();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(this.canvas);
  }

  _animate() {
    const duration  = 1500;
    const startTime = performance.now();
    const easeOut   = (t) => 1 - Math.pow(1 - t, 3);

    const frame = (now) => {
      const t  = Math.min((now - startTime) / duration, 1);
      this.progress = easeOut(t);
      this._draw(this.progress);
      if (t < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  _draw(progress = 1) {
    const { ctx, cx, cy, radius, levels, data, maxVal, color } = this;
    const total  = data.length;
    const angleStep = (Math.PI * 2) / total;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw web levels
    for (let lvl = 1; lvl <= levels; lvl++) {
      const r = (radius / levels) * lvl;
      ctx.beginPath();
      for (let i = 0; i < total; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = color.web;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw spokes
    for (let i = 0; i < total; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = color.web;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    data.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.value / maxVal) * radius * progress;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();

    // Gradient fill
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    grad.addColorStop(0, 'rgba(139,92,246,0.25)');
    grad.addColorStop(1, 'rgba(59,130,246,0.08)');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = color.stroke;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data points
    data.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.value / maxVal) * radius * progress;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3B82F6';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Labels
    ctx.font = `600 ${radius * 0.1 + 4}px Inter, sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    data.forEach((d, i) => {
      const angle  = i * angleStep - Math.PI / 2;
      const labelR = radius + 26;
      const x = cx + labelR * Math.cos(angle);
      const y = cy + labelR * Math.sin(angle);
      ctx.fillText(d.label, x, y);
    });
  }
}

window.RadarChart = RadarChart;
