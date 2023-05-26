const form = document.querySelector("[data-js='form']");
const showLogin = document.querySelector("[data-js='show-login']");

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

form.addEventListener("submit", logSystem);

function logSystem(event) {
  event.preventDefault();

  let usuario_form = document.querySelector("[data-js='user']").value;
  let senha_form = document.querySelector("[data-js='passwd']").value;

  let resultado_usuario = usuarioExiste(usuario_form);

  if (resultado_usuario) {
    let resultado_senha = senhaUsuarioCorreta(usuario_form, senha_form);

    if (resultado_senha) {
      showLogin.innerHTML = `Login realizado com sucesso! Bem vindo, ${usuario_form}`;
      form.reset();
    } else {
      showLogin.innerHTML = `Usuario ou senha incorretos! Tente novamente`;
      form.reset();
    }
  } else {
    showLogin.innerHTML = `Usuario ou senha incorretos! Tente novamente`;
    form.reset();
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
