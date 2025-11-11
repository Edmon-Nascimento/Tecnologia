"use strict";
// Como deixar um valor por default ou deixar ele opcional.
Object.defineProperty(exports, "__esModule", { value: true });
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
// cadastro("teste@teste.com", "123123", "Sujeito Programador", 28);
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja: ", status);
    return status;
}
cadastroLoja("Buruger K", "bk@teste.com", true);
//# sourceMappingURL=valor_default.js.map