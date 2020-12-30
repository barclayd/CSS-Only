const card = document.querySelector('.card');
const container = document.querySelector('.container');

const ANIMATION_EASE = 25;

container.addEventListener('mousemove', (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / ANIMATION_EASE;
  const yAxis = (window.innerHeight / 2 - event.pageY) / ANIMATION_EASE;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', () => {
  card.style.transition = 'none';
});

container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 1000ms ease';
  card.style.transform = `rotateY(0) rotateX(0)`;
});
