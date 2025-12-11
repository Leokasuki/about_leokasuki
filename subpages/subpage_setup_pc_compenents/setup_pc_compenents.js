function initSlides(slideClass, navClass, indicatorClass) {
const slideWrapper = document.querySelector(`.${slideClass}`);
const slides = slideWrapper.querySelectorAll('.slide');
const prevBtn = document.querySelector(`.${navClass} .prev`);
const nextBtn = document.querySelector(`.${navClass} .next`);
const indicatorWrapper = document.querySelector(`.${indicatorClass}`);


let index = 0;


slides.forEach((_, i) => {
const dot = document.createElement('div');
dot.classList.add('indicator');
if (i === 0) dot.classList.add('active');
indicatorWrapper.appendChild(dot);
});


const indicators = indicatorWrapper.querySelectorAll('.indicator');


function update() {
slides.forEach((s, i) => s.classList.toggle('active', i === index));
indicators.forEach((d, i) => d.classList.toggle('active', i === index));
}


prevBtn.addEventListener('click', () => {
index = (index - 1 + slides.length) % slides.length;
update();
});


nextBtn.addEventListener('click', () => {
index = (index + 1) % slides.length;
update();
});
}


initSlides('pc-slides', 'pc-nav', 'pc-indicators');
initSlides('setup-slides', 'setup-nav', 'setup-indicators');