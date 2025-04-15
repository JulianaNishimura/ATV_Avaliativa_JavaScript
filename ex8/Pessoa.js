export default class Pessoa {
    #nome;
    #idade;
    #telefone;
    #email;

    constructor(nome, idade, telefone,email){
        this.#nome = nome;
        this.#idade = idade;
        this.#telefone = telefone;
        this.#email = email;
    }

    toString(){
        return `Nome: ${this.#nome} | Idade: ${this.#idade} | Telefone: ${this.#telefone} | Email: ${this.#email}`
    }
}