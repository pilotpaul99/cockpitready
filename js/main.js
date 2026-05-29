// ClearSkies ATPL — main.js

// --- current year in footer ---
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// --- mobile nav toggle ---
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? '' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '68px';
    links.style.right = '0';
    links.style.left = '0';
    links.style.background = 'var(--paper)';
    links.style.padding = '1.2rem var(--gap)';
    links.style.borderBottom = '1px solid var(--line)';
    links.style.gap = '1rem';
    toggle.textContent = open ? 'MENÜ' : 'SCHLIESSEN';
  });
}

// --- TOC active state on scroll (module page) ---
const tocLinks = document.querySelectorAll('.toc a');
const sections = [...tocLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if (sections.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

// --- waitlist form (graceful: works once Formspree ID is set) ---
const form = document.getElementById('waitlistForm');
const msg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', async (e) => {
    // If the action still contains the placeholder, intercept and show a friendly note.
    if (form.action.includes('DEIN_FORM_ID')) {
      e.preventDefault();
      if (msg) msg.textContent = 'Formular-Backend noch nicht verbunden (Formspree-ID einsetzen).';
      return;
    }
    e.preventDefault();
    if (msg) msg.textContent = 'Wird gesendet …';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (msg) msg.textContent = 'Eingetragen — wir melden uns beim Launch. ✈';
      } else {
        if (msg) msg.textContent = 'Etwas ist schiefgelaufen. Bitte später erneut versuchen.';
      }
    } catch {
      if (msg) msg.textContent = 'Netzwerkfehler. Bitte später erneut versuchen.';
    }
  });
}
