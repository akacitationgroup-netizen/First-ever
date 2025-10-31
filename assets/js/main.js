document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Contact form handling (if present)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'crimson';
        return;
      }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = 'crimson';
        return;
      }

      status.textContent = 'Sending...';
      status.style.color = '';

      // Simulate send (replace with real API call when ready)
      setTimeout(function () {
        status.textContent = 'Message sent — thank you!';
        status.style.color = 'green';
        form.reset();
      }, 700);
    });
  }

  // ------ Theme toggle (dark / light) ------
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    // theme: 'dark' | 'light' | 'system'
    if (theme === 'system') {
      // follow system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.body.classList.add('dark');
      if (themeToggle) {
        themeToggle.innerHTML = '<span class="icon">☀️</span>';
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('data-theme', 'dark');
      }
    } else {
      document.body.classList.remove('dark');
      if (themeToggle) {
        themeToggle.innerHTML = '<span class="icon">🌙</span>';
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('data-theme', 'light');
      }
    }
  }

  // initialize theme from localStorage or system preference
  (function initTheme() {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        // saved can be 'dark'|'light'|'system'
        applyTheme(saved);
        if (themeToggle) themeToggle.setAttribute('data-preference', saved);
        return;
      }
    } catch (e) {
      // ignore localStorage errors
    }
    // default to system
    applyTheme('system');
    if (themeToggle) themeToggle.setAttribute('data-preference', 'system');
  })();

  // Cycle through preferences: system -> dark -> light -> system
  const cycle = ['system', 'dark', 'light'];

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = themeToggle.getAttribute('data-preference') || 'system';
      const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];

      // animate icon briefly
      themeToggle.classList.add('spin');
      setTimeout(() => themeToggle.classList.remove('spin'), 420);

      // apply and persist
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      themeToggle.setAttribute('data-preference', next);
      // update title to be clear
      themeToggle.setAttribute('title', `Theme: ${next} (click to change)`);
    });
  }

});
