"use strict";
let numAlt = document.querySelector('#alt');
let numPeso = document.querySelector('#peso');
const formulario = document.querySelector('form');
const mensagem = document.querySelector('#mensagem');
const mensagem2 = document.querySelector('#mensagem2');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    numAlt.className = numPeso.className = mensagem.className = '';
    let alt = parseFloat(numAlt.value.replace('.', '').replace(',', '.'));
    let peso = parseFloat(numPeso.value.replace('.', '').replace(',', '.'));
    function calcIMC(num1, num2) {
        if (isNaN(num1)) {
            mensagem.innerText = 'A altura não foi preenchida corretamente!';
            numAlt.className = mensagem.className = 'negative';
            numAlt.focus();
            return;
        }
        else if (isNaN(num2)) {
            mensagem.innerText = 'O peso não foi preenchido corretamente!';
            numPeso.className = mensagem.className = 'negative';
            numPeso.focus();
            return;
        }
        else if (num1 == 0) {
            mensagem.innerText = 'Insira uma altura maior que 0';
            numPeso.className = mensagem.className = 'negative';
            numPeso.focus();
            return;
        }
        else if (num2 == 0) {
            mensagem.innerText = 'Insira um peso maior que 0';
            numPeso.className = mensagem.className = 'negative';
            numPeso.focus();
            return;
        }
        else if (num1 > 3) {
            mensagem.innerText = 'Insira uma altura menor que 3,00';
            numPeso.className = mensagem.className = 'negative';
            numPeso.focus();
            return;
        }
        let result = num2 / (num1 * num1);
        mensagem.innerHTML = `O seu IMC é: ${result.toFixed(2)}.`;
        mensagem.className = 'positive';
        if (result > 0 && result < 18.5) {
            mensagem2.innerText = "Seu índice corporal é abaixo do ideal";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 18.5 && result < 24.9) {
            mensagem2.innerText = "Seu índice corporal é saudável";
            mensagem2.className = 'positive';
        }
        else if (result > 25 && result < 29.9) {
            mensagem2.innerText = "Seu índice corporal é acima do ideal";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 30 && result < 34.9) {
            mensagem2.innerText = "Seu índice corporal é de obesidade grau 1(leve)";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 35 && result < 39.9) {
            mensagem2.innerText = "Seu índice corporal é obesidade grau 2(severa)";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 40 && result < 49.9) {
            mensagem2.innerText = "Seu índice corporal é obesidade grau 3(mórbida)";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 50 && result < 59.9) {
            mensagem2.innerText = "Seu índice corporal é de super obesidade";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        else if (result > 60) {
            mensagem2.innerText = "Seu índice corporal é de hiper obesidade";
            mensagem2.className = 'negative';
            mensagem.className = 'negative';

        }
        numAlt.value = numPeso.value = '';
        numAlt.focus();
        return;
    }
    calcIMC(alt, peso);
});
