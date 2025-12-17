"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    id = "123";
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`ID DO USUARIO: `, this.id);
    }
}
const ana = new Pessoa("Ana Carol", 29);
console.log("ID DA ANA: ", ana.id);
// console.log(ana);
//# sourceMappingURL=readonly.js.map