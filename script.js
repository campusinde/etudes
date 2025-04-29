document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
        select.addEventListener("change", () => {
            alert("Vous avez sélectionné " + select.value);
        });
    });
});
