const $carouselCard = document.querySelectorAll(".features-carousel_card");
const $carouselBtn = document.querySelectorAll(".features-carousel_btn");
const $heroCarouselCard = document.querySelectorAll(".hero-carousel_card");
const $shopRowContent = document.querySelectorAll(".shop-row_content");

//hero-carousel_card
let heroCount = 0;

function heroCarousel() {
    setTimeout(() => {
        if (heroCount > 0) {
            $heroCarouselCard[heroCount].style.opacity = 1;
            heroCount = 0;
            $heroCarouselCard[heroCount].style.opacity = 0;
            return heroCarousel();
        }
        $heroCarouselCard[heroCount].style.opacity = 1;
        heroCount++;
        $heroCarouselCard[heroCount].style.opacity = 0;
        heroCarousel();
    }, 5000);
}
window.addEventListener("load", () => {
    $heroCarouselCard[heroCount].style.opacity = 1;
    heroCount++;
    heroCarousel();
});

//features-carousel_card
let featuresCount = 0;

window.addEventListener("load", () => {
    if (window.screen.width < 800) $carouselCard[featuresCount].style.transform = "translateX(0)";
});

function carouselForward() {
    $carouselCard[featuresCount].style.transform = "translateX(-200%)";

    if (featuresCount <= $carouselCard.length) {
        featuresCount++;
        if (featuresCount == $carouselCard.length) {
            featuresCount = 0;
        }
        if (featuresCount == 0) {
            $carouselCard.forEach((el) => {
                el.style.transform = "translateX(200%)";
            });
        }
        $carouselCard[featuresCount].style.transform = "translateX(0)";
    }
}

function carouselBackward() {
    $carouselCard[featuresCount].style.transform = "translateX(200%)";
    if (featuresCount <= $carouselCard.length) {
        featuresCount--;
        if (featuresCount < 0) {
            featuresCount = $carouselCard.length - 1;
            $carouselCard.forEach((el) => {
                el.style.transform = "translateX(-200%)";
            });
            $carouselCard[featuresCount].style.transform = "translateX(0)";
        }
        $carouselCard[featuresCount].style.transform = "translateX(0)";
    }
}

if (window.screen.width < 800) {
    $carouselBtn[0].addEventListener("click", carouselBackward);
    $carouselBtn[1].addEventListener("click", carouselForward);
    setInterval(carouselForward, 4000);
}

//shop-row-carousel_content
for (let i = 0; i < $shopRowContent.length; i++) {
    setInterval(() => {
        if ($shopRowContent[i].scrollLeft > 0) {
            $shopRowContent[i].scroll({
                left: 0,
                behavior: "smooth",
            });
        } else {
            $shopRowContent[i].scroll({
                left: $shopRowContent[i].scrollWidth,
                behavior: "smooth",
            });
        }
    }, 6000);
}
