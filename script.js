window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    let header = document.getElementById("header");
    let navMenu = document.getElementById("navMenu");

    if (currentScroll > lastScrollTop) {
        // Scrolling down: Hide header, show nav menu
        header.classList.add("hidden");
        navMenu.classList.remove("nav-hidden");
    } else {
        // Scrolling up: Show header, hide nav menu
        header.classList.remove("hidden");
        navMenu.classList.add("nav-hidden");
    }

    lastScrollTop = currentScroll;
});
