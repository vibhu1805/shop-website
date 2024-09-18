document.addEventListener("DOMContentLoaded", () => {
    // Show a popup message when the website loads
    alert("For placing an order, contact us at numbers given below");

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
        reset: true, // Ensure the animation resets if it is scrolled out of view
    };

    // Header container animations
    ScrollReveal().reveal(".header__container h1", scrollRevealOptions);
    ScrollReveal().reveal(".header__container p", {
        ...scrollRevealOptions,
        delay: 500,
    });
    ScrollReveal().reveal(".header__container form", {
        ...scrollRevealOptions,
        delay: 1000,
    });
    ScrollReveal().reveal(".header__container a", {
        ...scrollRevealOptions,
        delay: 1500,
    });

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
