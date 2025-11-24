"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
}
const novoCurso = {
    id: "5198",
    nome: "Curso Typescript",
    preco: 750,
    //É possível atribuir diretamente por função anônima
    promocao: mostraPromocao
};
console.log(novoCurso.promocao(350));
//# sourceMappingURL=funcoes.js.map