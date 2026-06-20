/* ============================================================
   MAIN.JS — Application Bootstrap
   ============================================================ */

/* ── Project Data for Modals ── */
window.projectData = {
  aarogya: {
    title: 'Aarogya Darpan',
    content: `
      <div style="display:grid;gap:1.25rem">
        <p style="color:#9CA3AF;line-height:1.75">
          Aarogya Darpan is a centralized healthcare ecosystem that bridges the gap between hospitals, patients,
          laboratories, and pharmacies through a unified digital platform. The system enables paperless hospital
          management, secure digital medical records, real-time appointment booking, and seamless prescription management.
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">
          <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;background:linear-gradient(135deg,#3B82F6,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">4+</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Stakeholders Connected</div>
          </div>
          <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;background:linear-gradient(135deg,#3B82F6,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">100%</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Paperless</div>
          </div>
          <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;background:linear-gradient(135deg,#3B82F6,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Top 50</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">among 751 teams</div>
          </div>
        </div>
        <div>
          <h4 style="font-weight:700;margin-bottom:0.75rem;color:#fff">Tech Stack</h4>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
            ${['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API', 'JWT Auth', 'Cloudinary'].map(t =>
              `<span style="padding:0.25rem 0.75rem;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);border-radius:999px;font-size:0.75rem;color:#60A5FA;font-weight:600">${t}</span>`
            ).join('')}
          </div>
        </div>
        <div>
          <h4 style="font-weight:700;margin-bottom:0.75rem;color:#fff">Key Features</h4>
          <ul style="color:#9CA3AF;font-size:0.9rem;line-height:2;padding-left:1.25rem;list-style:disc">
            <li>Secure patient digital health records</li>
            <li>Real-time appointment booking and management</li>
            <li>Lab report upload and digital prescription system</li>
            <li>Pharmacy inventory integration</li>
            <li>Role-based access control (Doctor / Patient / Lab / Pharmacy)</li>
          </ul>
        </div>
      </div>
    `
  },
  irrigation: {
    title: 'Smart Irrigation System',
    content: `
      <div style="display:grid;gap:1.25rem">
        <p style="color:#9CA3AF;line-height:1.75">
          An IoT-powered precision irrigation platform using real-time soil moisture sensors, weather data APIs,
          and automated actuators to optimize water usage in agriculture. The system reduces water waste by up to
          40% while increasing crop yield through intelligent scheduling.
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">
          <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#22c55e">40%</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Water Saved</div>
          </div>
          <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#22c55e">24/7</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Automation</div>
          </div>
          <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#22c55e">Real-time</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Monitoring</div>
          </div>
        </div>
        <div>
          <h4 style="font-weight:700;margin-bottom:0.75rem;color:#fff">Tech Stack</h4>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
            ${['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'Node.js', 'MongoDB', 'React Dashboard', 'OpenWeatherAPI'].map(t =>
              `<span style="padding:0.25rem 0.75rem;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:999px;font-size:0.75rem;color:#86efac;font-weight:600">${t}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `
  },
  ai: {
    title: 'AI Vision Intelligence Platform',
    content: `
      <div style="display:grid;gap:1.25rem">
        <p style="color:#9CA3AF;line-height:1.75">
          A next-generation AI platform powered by Computer Vision, YOLO object detection, and deep learning
          models. Built for real-world applications including security surveillance, retail analytics, and
          autonomous quality control in manufacturing.
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">
          <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#a78bfa">98.2%</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Detection Accuracy</div>
          </div>
          <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#a78bfa">60fps</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Real-time</div>
          </div>
          <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:12px;padding:1rem;text-align:center">
            <div style="font-size:1.5rem;font-weight:800;color:#a78bfa">Multi</div>
            <div style="font-size:0.75rem;color:#6B7280;margin-top:0.25rem">Model Support</div>
          </div>
        </div>
        <div>
          <h4 style="font-weight:700;margin-bottom:0.75rem;color:#fff">Tech Stack</h4>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
            ${['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'FastAPI', 'React', 'Docker', 'CUDA'].map(t =>
              `<span style="padding:0.25rem 0.75rem;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);border-radius:999px;font-size:0.75rem;color:#c4b5fd;font-weight:600">${t}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `
  }
};

/* ── Loader ── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Trigger hero animations after load
    document.querySelectorAll('.hero-text > *, .hero-stats').forEach((el) => {
      el.style.animationPlayState = 'running';
    });
  }, 2200);
}

/* ── Initialize Everything ── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';

  // Core
  initLoader();
  initNavbar();
  initMobileNav();
  initSmoothScroll();
  initScrollReveal();

  // Hero
  new ParticleSystem('hero-canvas');
  initMouseParallax();

  const typeEl = document.getElementById('typewriter-text');
  if (typeEl) {
    new Typewriter(typeEl, [
      'AI Developer',
      'Full Stack Engineer',
      'Startup Founder',
      'Problem Solver',
      'Tech Innovator',
      'Open Source Contributor',
    ], { speed: 75, delete: 40, pause: 2200 });
  }

  // Counters
  initCounters();

  // Skills
  initSkillsTabs();
  initSkillBars();

  // Radar chart
  new RadarChart('radar-canvas', [
    { label: 'Frontend',  value: 90 },
    { label: 'Backend',   value: 82 },
    { label: 'AI/ML',     value: 78 },
    { label: 'Database',  value: 80 },
    { label: 'DevOps',    value: 70 },
    { label: 'Design',    value: 72 },
  ]);

  // Projects
  initProjectModals();
  initTilt();

  // Tech ecosystem
  initTechEcosystem();

  // Contact
  initContactForm();

  // Active nav
  initActiveNav();

  // Custom cursor
  new CustomCursor();
});
