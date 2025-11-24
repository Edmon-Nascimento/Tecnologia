"use strict";
// Tipo desconhecido > quando você nao sabe o TIPO que vai receber.
Object.defineProperty(exports, "__esModule", { value: true });
let total;
total = 100;
total = "350";
total = {
    total: 100,
};
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
// valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega = totalPedido;
console.log(totalEntrega);
//# sourceMappingURL=type%20unknows.js.map