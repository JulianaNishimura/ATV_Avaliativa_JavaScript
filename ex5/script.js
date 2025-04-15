let totalLista = [];
let mensagensLista = [];
function configurarElementos(){
    let precoElemento = document.getElementById('preco');
    let quantidadeElemento = document.getElementById('quantidade');
    let produtoSelecionado = document.getElementById('produtos')
    if(produtoSelecionado instanceof HTMLSelectElement && precoElemento instanceof HTMLInputElement && quantidadeElemento instanceof HTMLInputElement){
        let prodSele = produtoSelecionado.options[produtoSelecionado.selectedIndex].value;
        let quantidade = parseInt(quantidadeElemento.value);
        let preco = parseFloat(precoElemento.value);
        let total = quantidade * preco;
        let mensagem = `${prodSele} : R$${total} | quantidade: ${quantidade}\n <br>`
        totalLista.push(total);
        mensagensLista.push(mensagem);

        saida(mensagem);
    }
}

function saida(mensagem){
    let saida = document.getElementById('saida');
    let total = 0;
    let texto = "";
    if(saida != null){
        saida.innerHTML = ""
        totalLista.forEach((valor) => {
            total += valor
        })

        mensagensLista.forEach((mensagem) => {
            texto = texto + mensagem;
            console.log(texto);
            console.log(mensagem);
        })

        console.log(texto)

        saida.innerHTML = texto + `<br>Total: R$${total}`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('totalBtn');
    if(btn instanceof HTMLButtonElement){
        btn.addEventListener('click', configurarElementos)
    }
})