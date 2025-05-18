// Seleciona os elementos
const imagem = document.getElementById("minhaImagem");
const botao = document.getElementById("trocarImagem");

// Estado atual da imagem
let imagemAtual = 1;

// Função que troca a imagem
function trocarImagem() {
    if (imagemAtual === 1) {
        imagem.src = "img/gato.jpg";
        imagemAtual = 2;
    } else {
        imagem.src = "img/macaco.jpg";
        imagemAtual = 1; 
    }
}

// Associa o evento de clique
botao.addEventListener("click", trocarImagem);