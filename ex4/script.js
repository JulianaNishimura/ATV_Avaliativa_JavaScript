function configurarElementos(){
    let numero1 = document.getElementById('num1');
    let numero2 = document.getElementById('num2');

    if(numero1 instanceof HTMLInputElement && numero2 instanceof HTMLInputElement){
        let num1 = parseFloat(numero1.value);
        let num2 = parseFloat(numero2.value);
        let maior;
        let menor;

        if(num1 === num2){
            alert("Escreva números diferentes!");
            return;
        } else if(isNaN(num1) || isNaN(num2)){
            alert("Preencha os números!")
            return;
        } else if(num1 > num2) {
            maior = num1;
            menor = num2;
        } else {
            maior = num2;
            menor = num1;
        }
        multiplo(maior, menor);
    }
}

function multiplo(maior, menor){
    let i = menor;
    let contador = 0;

    for(i; i<=maior; i++){
        if(i%5===0){
            contador++;
        }
    }

    return saidaResultado(contador);
}

function saidaResultado(contador){
    let saida = document.getElementById('saida');
    if(saida != null){
        saida.textContent = `Temos ${contador} números múltiplos de 5 no intervalo destes dois números.`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('multiplosBtn');
    if(btn instanceof HTMLButtonElement){
        btn.addEventListener('click', configurarElementos)
    }
});