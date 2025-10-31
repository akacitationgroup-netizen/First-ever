document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

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
});
