merlin = document.querySelector('img');
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('mouseenter', () => merlin.classList.add('wiggle'));
  link.addEventListener('mouseleave', () => merlin.classList.remove('wiggle'));
});