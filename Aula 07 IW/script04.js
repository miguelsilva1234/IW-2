const imagem = document.getElementById("minhaImagem");
const imagem1 = document.getElementById("botao1");
const imagem2 = document.getElementById("botao2");
const imagem3 = document.getElementById("botao3");

function imagem1troca() {
    imagem.src = "img/gato.jpg";
    imagem.alt = "Macaco";
  }

function imagem2troca() {
    imagem.src = "img/macaco.jpg";
    imagem.alt = "Macaco";
  }

function imagem3troca() {
    imagem.src = "img/gato2.jpeg";
    imagem.alt = "Macaco";
  }

imagem1.addEventListener("click", imagem1troca);
imagem2.addEventListener("click", imagem2troca);
imagem3.addEventListener("click", imagem3troca);