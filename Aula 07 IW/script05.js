// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estadoTexto = document.getElementById("estado");

let isLigada = false;
// Funções para ligar e desligar a lâmpada
function ligarLampada() {
 lampada.src = "img/lampada_ligada.jpg";
 lampada.alt = "Lâmpada Ligada";
 isLigada = true;
 atualizarInterface();
}
function desligarLampada() {
 lampada.src = "img/lampada_desligada.jpg";
 lampada.alt = "Lâmpada Desligada";
 isLigada = false;
 atualizarInterface();
}

function atualizarInterface() {
    btnLigar.disabled = isLigada;
    btnDesligar.disabled = !isLigada;
    estadoTexto.innerText = isLigada ? "A lâmpada está ligada." : "A lâmpada está desligada.";
  }
  
// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);

