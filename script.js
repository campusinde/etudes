document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const programme = document.getElementById('programme').value;

    alert(`Demande soumise avec succès !\nNom: ${nom}\nEmail: ${email}\nProgramme: ${programme}`);
});

let lastScrollTop = 0;

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
