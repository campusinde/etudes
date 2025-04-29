document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const programme = document.getElementById('programme').value;

    alert(`Demande soumise avec succès !\nNom: ${nom}\nEmail: ${email}\nProgramme: ${programme}`);
});
