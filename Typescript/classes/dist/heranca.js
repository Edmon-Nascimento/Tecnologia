"use strict";
// Herança > quando nós temos uma classe que herda de outra classe
// ClassePAI tem seus atributos e a classe FILHA vai herdar todos atributos do pai alem dos seus proprios atributos
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cargo, nivel) {
        // Chamando o cosntrutor da classe pai.
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin("Matheus", "matheus@teste.com", "Programador", 2);
console.log(usuario1);
console.log(usuario1.nome);
//# sourceMappingURL=heranca.js.map