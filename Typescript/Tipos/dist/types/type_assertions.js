"use strict";
// Afirmando algum tipo.
Object.defineProperty(exports, "__esModule", { value: true });
let statusAtual = 1;
let mudaStatus = 0;
// Estou afirmando que o statusAtual é de fato um numero!
mudaStatus = statusAtual;
// Outra maneira de afirmar o tipo.
mudaStatus = statusAtual;
console.log(mudaStatus);
let query = 'pizza';
let searchTerm = query;
console.log('Search TERM: ', searchTerm);
//# sourceMappingURL=type_assertions.js.map