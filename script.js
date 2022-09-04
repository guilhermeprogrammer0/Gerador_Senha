var btn_gerar = document.querySelector("#btn-gerar");
btn_gerar.addEventListener('click', gerarSenha);
var slider = document.querySelector("#slider");
var area_tamanho = document.querySelector("#tamanho_senha");
var senha = document.querySelector("#senha");
var incluir = document.querySelector("#incluir");
area_tamanho.style.fontWeight = 'bold';

var pass = '';

var caracteres_permitidos1 = ['a', 'b', 'c', 'd', 'e', 'r', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'r', 'u', 'v', 'w', 'x', 'y', 'z']

var caracteres_permitidos2 = caracteres_permitidos1.concat('1', '2', '3', '4', '5', '6', '7', '8', '9')

var tamanho_permitidos1 = caracteres_permitidos1.length;
var tamanho_permitidos2 = caracteres_permitidos2.length;
area_tamanho.innerHTML = slider.value;

slider.oninput = function () {
    area_tamanho.innerHTML = slider.value;
}
function gerarSenha() {
    pass = ''

    if (incluir.checked) {
        for (let i = 0; i < slider.value; i++) {
            pass += caracteres_permitidos2[Math.floor(Math.random() * tamanho_permitidos2)]
        }
    }
    else {
        for (let i = 0; i < slider.value; i++) {
            pass += caracteres_permitidos1[Math.floor(Math.random() * tamanho_permitidos1)]
        }
    }

    senha.innerHTML = pass;
    senha.classList.remove("escondido")

}