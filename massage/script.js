const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
  card.classList.add('animate');
});

card.addEventListener('mouseout', () => {
  card.classList.remove('animate');
});