const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
});

const senha = document.getElementById("senha");

const botaoSenha = document.getElementById("mostrar-senha");

botaoSenha.addEventListener("click", function () {
  senha.type = senha.type === "password" ? "text" : "password";
});
