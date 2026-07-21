document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const expanded = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const audiencePanels = document.querySelectorAll('.audience-panel');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const audience = btn.dataset.audience;
      toggleBtns.forEach(b => b.classList.toggle('is-active', b === btn));
      audiencePanels.forEach(panel => {
        panel.hidden = panel.dataset.audience !== audience;
      });
    });
  });

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new URLSearchParams(new FormData(form)).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      })
        .then(() => {
          form.style.display = 'none';
          document.querySelector('.form-success').style.display = 'block';
        })
        .catch(() => {
          form.style.display = 'none';
          document.querySelector('.form-success').style.display = 'block';
        });
    });
  }
});
