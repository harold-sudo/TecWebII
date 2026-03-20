document.addEventListener("DOMContentLoaded", function () {
    var hamburgerButton = document.querySelector(".hamburger-label");
    var nav = document.querySelector(".nav");

    if (!hamburgerButton || !nav) {
        return;
    }

    function closeMenu() {
        nav.classList.remove("nav--open");
        hamburgerButton.classList.remove("hamburger-label--active");
        hamburgerButton.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
        nav.classList.add("nav--open");
        hamburgerButton.classList.add("hamburger-label--active");
        hamburgerButton.setAttribute("aria-expanded", "true");
    }

    hamburgerButton.addEventListener("click", function () {
        var isOpen = nav.classList.contains("nav--open");

        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
