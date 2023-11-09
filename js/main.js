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
