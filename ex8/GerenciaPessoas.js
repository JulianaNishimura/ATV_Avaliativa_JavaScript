import Pessoa from './Pessoa.js';

export class GerenciaPessoas {
  //coloquei tudo publico para tentar ganhar tempo sem os get e set

  pessoas = []

    constructor(){
        this.#configurar();
    }

    #configurar() {
      let adicionarBtn = document.getElementById('adicionarBtn');
      let removerBtn = document.getElementById('removerBtn');

      adicionarBtn.addEventListener('click', this.adicionar);

      removerBtn.addEventListener('click', this.remover)
  }

  adicionar(){
      let nome = document.getElementById('nome').value;
        let idade = parseInt(document.getElementById('idade').value);
        let telefone = parseInt(document.getElementById('telefone').value);
        let email = document.getElementById('email').value;
        let existe = false;

        if(this.pessoas !== undefined){
          
        }
    
        this.pessoas.forEach((pessoasExistente) => {
        if(nome === pessoasExistente.nome || telefone === pessoasExistente.telefone || email === pessoasExistente.email){
          alert("O filme já existe.")
          existe = true;
        }
      })
      

        if(!existe){
          this.pessoas.push(new Pessoa(nome,idade,telefone,email));
          this.exibir();
        }
    }

  remover(){
    let nomeRemoverInput = document.getElementById('nomeRemover');

    if(nomeRemoverInput instanceof HTMLInputElement){
        let nome = nomeRemoverInput.value;

        let indice = this.pessoas.findIndex((pessoa) => pessoa.nome === nome);
        //filter, find, etc.
        if (indice !== -1 && !isNaN(indice)) {
            this.pessoas.splice(indice,1);
            this.exibir();
        } else {
            alert("Pessoa não encontrada")
        }
    }
  }

  exibir(){
    console.log("exibiu");
    const resultadoDiv = document.getElementById('resultado');
  
    resultadoDiv.innerHTML = '';
  
    this.pessoas.forEach(pessoa => {
        const div = document.createElement('div');
        div.className = 'pessoa-item';
        div.textContent = `${pessoa.toString()}`;
        resultadoDiv.appendChild(div);
    });
  
    this.limparConteudo();
  }

  limparConteudo() {
    let nomeInput = document.getElementById('nome');
    let idadeInput = document.getElementById('idade');
    let telefoneInput = document.getElementById('telefone');
    let emailInput = document.getElementById('email');

    if(nomeInput instanceof HTMLInputElement && idadeInput instanceof HTMLInputElement && telefoneInput instanceof HTMLInputElement && emailInput instanceof HTMLInputElement){
        nomeInput.value = "";
        idadeInput.value = "";
        telefoneInput.value = "";
        emailInput.value = "";
    }
  }
}

// Inicializar o Gerenciador ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  new GerenciaPessoas();
});