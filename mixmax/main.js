// IMPORTA FILMES
import { filmes } from "./filmes.js";


// PEGA ELEMENTOS
const container = document.querySelector(".filmes");
const pesquisa = document.querySelector(".pesquisa");


// MOSTRAR FILMES
function mostrarFilmes(lista) {

  // SE NÃO EXISTIR CONTAINER, PARA
  if (!container) return;

  container.innerHTML = "";

  lista.map((filme) => {

    const card = document.createElement("div");

    card.classList.add("card-filme");

    card.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.nome}">
      <p>${filme.nome}</p>
      <span>${filme.categoria}</span>
    `;

    container.appendChild(card);

  });

}


// MOSTRA TODOS
mostrarFilmes(filmes);


// PESQUISA
if (pesquisa) {

  pesquisa.addEventListener("input", () => {

    const filtrados = filmes.filter((filme) =>

      filme.nome.toLowerCase().includes(
        pesquisa.value.toLowerCase()
      )

    );

    mostrarFilmes(filtrados);

  });

}


// LOGIN
const btnLogin = document.getElementById("btn-login");

if (btnLogin) {

  btnLogin.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const user = JSON.parse(localStorage.getItem("user"));

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

  });

}


// SIGNUP
const btnSignup = document.getElementById("btn-signup");

if (btnSignup) {

  btnSignup.addEventListener("click", () => {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (!nome || !email || !senha || !confirmar) {
      alert("Preencha tudo!");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    const user = {
      nome,
      email,
      senha
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Conta criada!");

    window.location.href = "login.html";

  });

}