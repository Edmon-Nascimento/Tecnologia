"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    //nome: "Edmon", 
    email: "edmon@teste.com",
    status: true,
};
//Se opcional e o usuário não mandar, fica como indefinido
function novoUser(propriedades) {
    console.log(propriedades.nome);
}
novoUser({ email: "teste@teste.com", status: false });
//# sourceMappingURL=opcional.js.map