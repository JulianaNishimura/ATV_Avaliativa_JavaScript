
function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    if(num2 === 0){
        alert("Não é possível dividir por 0")
    }
    return num1/num2;
}

function pot(num1,num2){
    return Math.pow(num1,num2);
}

function rad(num1,num2){
    return `${Math.sqrt(num1)} | ${Math.sqrt(num2)}`
}

function qualOp(callback,num1,num2){
    const funcao = {
        add: add,
        sub: sub,
        mul: mul,
        div: div,
        pot: pot,
        rad: rad,
      };
    return funcao[callback](num1,num2);
}//Callback para reutilizar a lógica, não fazer vários ifs.

function configurarElementos(){
    let operacaoselecionada = document.getElementById('operacoes')
    let numero1Elemento = document.getElementById('num1');
    let numero2Elemento = document.getElementById('num2');

    if(operacaoselecionada instanceof HTMLSelectElement && numero1Elemento instanceof HTMLInputElement && numero2Elemento instanceof HTMLInputElement){
        let operacao = operacaoselecionada.options[operacaoselecionada.selectedIndex].value;
        let numero1 = parseFloat(numero1Elemento.value);
        let numero2 = parseFloat(numero2Elemento.value);
        let mensagem = qualOp(operacao,numero1,numero2);
        saida(mensagem);
    }

}

function saida(mensagem){
    let saida = document.getElementById('saida');
    if(saida != null){
        saida.textContent = `Resultado: ${mensagem}`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('calculaBtn');
    if(btn instanceof HTMLButtonElement){
        btn.addEventListener('click', configurarElementos)
    }
})