const formulario = document.querySelector("[data-js='form']");
const mostrarLogin = document.querySelector("[data-js='mostrar-login']");

const bancoDeDados = [
  {
    user: "Alisson",
    password: "123A",
  },
  {
    user: "Elisafa",
    password: "123E",
  },
  {
    user: "Mario",
    password: "123M",
  },
];

formulario.addEventListener("submit", logarNoSistema);

function logarNoSistema(event) {
  event.preventDefault();

  let usuario_formulario = document.querySelector("[data-js='user']").value;
  let senha_formulario = document.querySelector("[data-js='passwd']").value;

  let resultado_usuario = usuarioExiste(usuario_formulario);

  if (resultado_usuario == true) {
    let resultado_senha = senhaUsuarioCorreta(usuario_formulario, senha_formulario);

    if (resultado_senha == true) {
      mostrarLogin.innerHTML = `LOGIN REALIZADO COM SUCESSO! Bem vindo, ${usuario_formulario}`;
      formulario.reset();
    } else {
      mostrarLogin.innerHTML = `Usuario ou senha incorretos! Tente novamente`;
      formulario.reset();
    }
  } else {
    mostrarLogin.innerHTML = `Usuario ou senha incorretos! Tente novamente`;
    formulario.reset();
  }
}

function usuarioExiste(usuario) {
  let usuario_encontrado = false;

  bancoDeDados.forEach((element) => {
    if (element.user == usuario) {
      usuario_encontrado = true;
    }
  });

  return usuario_encontrado;
}

function senhaUsuarioCorreta(usuario, senha) {
  let usuarioAlvo = {};
  let senha_usuario_correta = false;

  bancoDeDados.forEach((element) => {
    if (usuario == element.user) {
      usuarioAlvo = element;
    }
  });

  if (usuarioAlvo.password == senha) {
    senha_usuario_correta = true;
  } else {
    senha_usuario_correta = false;
  }

  return senha_usuario_correta;
}
