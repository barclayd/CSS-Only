const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const shoe = document.querySelector('.shoe img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');

const ANIMATION_EASE = 25;

container.addEventListener('mousemove', (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / ANIMATION_EASE;
  const yAxis = (window.innerHeight / 2 - event.pageY) / ANIMATION_EASE;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', () => {
  card.style.transition = 'none';
  title.style.transform = 'translateZ(150px)'
  shoe.style.transform = 'translateZ(200px) rotateZ(35deg)'
  description.style.transform = 'translateZ(75px)'
  description.style['text-shadow'] = '0 5px 14px rgba(0, 0, 0, 0.28)'
  sizes.style.transform = 'translateZ(100px)'
  purchase.style.transform = 'translateZ(75px)'
});

container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 1000ms ease';
  card.style.transform = `rotateY(0) rotateX(0)`;
  title.style.transform = 'translateZ(0)'
  shoe.style.transform = 'translateZ(0) rotateZ(0)'
  description.style.transform = 'translateZ(0)'
  sizes.style.transform = 'translateZ(0)'
  purchase.style.transform = 'translateZ(0)'
  description.style['text-shadow'] = 'none'
});
