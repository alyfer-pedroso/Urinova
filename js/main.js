$aboutUsBtnsS = document.querySelectorAll(".about-us_container");
$hamburguerMenuBtn = document.querySelector(".Desktop .fa-bars");
$hamburguerMenu = document.querySelector(".hamburguer-menuDesktop");

$hamburguerMenuBtn.addEventListener("click", () => {
    $hamburguerMenu.classList.toggle("opened_hamburguer-menu");
});

if (window.screen.width < 800) {
    $aboutUsBtnsS.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.classList.contains("about-us_btn")) {
                e.target.parentNode.classList.toggle("opened_about-us");
            } else if (e.target.parentNode.classList.contains("about-us_btn")) {
                e.target.parentNode.parentNode.classList.toggle("opened_about-us");
            } else if (e.target.parentNode.parentNode.classList.contains("about-us_btn")) {
                e.target.parentNode.parentNode.parentNode.classList.toggle("opened_about-us");
            }
        });
    });
}

function headerFixed() {
    const $header = document.querySelector(".header");
    const $pixTop = document.querySelector("#pix");

    if (scrollY > $pixTop.style.height + 10) {
        $header.classList.add("header-scroll");
    } else {
        $header.classList.remove("header-scroll");
    }
}

window.addEventListener("scroll", headerFixed);
