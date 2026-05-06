function login() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (email === user.email && senha === user.senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "home.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

function signup() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;

  if (!nome || !email || !senha || !confirmar) {
    alert("Preencha tudo!");
    return;
  }

  if (senha !== confirmar) {
    alert("Senhas não coincidem!");
    return;
  }

  let user = { nome, email, senha };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Conta criada!");
  window.location.href = "login.html";
}

if (window.location.pathname.includes("home.html")) {
  if (localStorage.getItem("logado") !== "true") {
    window.location.href = "login.html";
  }
}
