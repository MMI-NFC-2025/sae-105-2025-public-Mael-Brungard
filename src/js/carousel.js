const carousel = document.querySelector('.section--galerie__carousel-list');
const nextbtn = document.querySelector('.carousel__button--next');
const prevbtn = document.querySelector('.carousel__button--prev');

const premierItem = document.querySelector(".section--galerie__carousel-item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {
    nextbtn.addEventListener('click', () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
    prevbtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
}

// artistes/lila-ike.html ou autres artistes
// artistes.html pour accéder au pages des artistes