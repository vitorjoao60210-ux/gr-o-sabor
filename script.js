document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
});
