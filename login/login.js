const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const nascimento = document.getElementById("nascimento").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;
});

const senha = document.getElementById("senha");

const botaoSenha = document.getElementById("mostrar-senha");

botaoSenha.addEventListener("click", function () {
  senha.type = senha.type === "password" ? "text" : "password";
});
