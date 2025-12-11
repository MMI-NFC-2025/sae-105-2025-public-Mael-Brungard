const carousel = document.querySelector('.galerie-carousel-list');
const nextbtn = document.querySelector('.carousel__button--next');
const prevbtn = document.querySelector('.carousel__button--prev');

const premierItem = document.querySelector(".galerie-carousel-item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {
    nextbtn.addEventListener('click', () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
    prevbtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
}

