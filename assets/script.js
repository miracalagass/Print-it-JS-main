const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentIndex = 0;
const totalSlides = slides.length;
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

function updateBanner() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;
	updateDots();
}

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
	console.log('Left arrow clicked, currentIndex:', currentIndex);
    updateBanner();
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
	console.log('Right arrow clicked, currentIndex:', currentIndex);
    updateBanner();
});

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('dot_selected');
        }
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateBanner();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Initial banner setup
updateBanner();
createDots();