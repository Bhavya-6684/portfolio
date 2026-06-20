/* ============================================================
   COUNTER.JS — Animated Number Counters
   ============================================================ */

class CounterAnimation {
  constructor(el) {
    this.el     = el;
    this.target = parseInt(el.dataset.target, 10) || 0;
    this.suffix = el.dataset.suffix || '';
    this.duration = 2000;
    this.started  = false;
  }

  start() {
    if (this.started) return;
    this.started = true;

    const startTime  = performance.now();
    const startValue = 0;
    const target     = this.target;
    const suffix     = this.suffix;
    const el         = this.el;

    const easeOut = (t) => 1 - Math.pow(1 - t, 4);

    const step = (now) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      const value    = Math.round(easeOut(progress) * target);

      el.textContent = value.toLocaleString() + suffix;

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = new CounterAnimation(entry.target);
        counter.start();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

window.CounterAnimation = CounterAnimation;
window.initCounters = initCounters;
