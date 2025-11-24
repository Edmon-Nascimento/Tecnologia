"use strict";
/*let loja:object

loja = {
    nome: "ENS",
    endereco: "Rua x",
    status: true
}*/
Object.defineProperty(exports, "__esModule", { value: true });
const ENS = {
    nome: "ENS",
    endereco: "Rua x",
    status: true
};
//É possível utilizar em funções também
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Enderaço da loja ${endereco}`);
    console.log(`Status da loja ${status}`);
}
//# sourceMappingURL=interfaces.js.map