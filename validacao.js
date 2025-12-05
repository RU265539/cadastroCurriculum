document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede envio automático

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Verificação dos campos vazios
    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validação simples de email com regex
    let padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!padraoEmail.test(email)) {
      alert("Por favor, informe um e-mail válido (ex: usuario@dominio.com).");
      return;
    }

    alert("Formulário enviado com sucesso!");
    form.submit(); // envia após validar
  });
});
