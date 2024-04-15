const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// button

const preBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

preBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;
   

carouselSlide.style.transition = "transform 0.4s ease-in-out";

counter++; 

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

// next button

nextBtn.addEventListener('click', () => {
    if (counter <= 0) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    
    counter--; 
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    });

    carouselslide.addEventListener('transitionend', () => {
        if (carouselImages [counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if (carouselImages [counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }

        });













        let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const slideCount = slides.length;

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slideCount - 1;
    }
    
    if (currentSlide >= slideCount) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
        

        