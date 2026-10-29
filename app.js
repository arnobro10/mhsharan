document.querySelectorAll('[data-accordion]').forEach(button => {
  const panel = document.getElementById(button.dataset.accordion);
  const toggle = open => { panel.hidden = !open; button.setAttribute('aria-expanded', String(open)); };
  button.addEventListener('click', () => toggle(button.getAttribute('aria-expanded') !== 'true'));
  if (location.hash === '#' + panel.id) toggle(true);
});
