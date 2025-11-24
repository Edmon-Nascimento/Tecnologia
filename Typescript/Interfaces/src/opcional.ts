
interface CadastroProps{
    nome?: string; //Essa propriedade é opcional
    email:string;
    status:boolean;
}


const novoUsuario: CadastroProps = {
    //nome: "Edmon", 
    email:"edmon@teste.com",
    status: true,
}

//Se opcional e o usuário não mandar, fica como indefinido

function novoUser(propriedades:CadastroProps){
    console.log(propriedades.nome)
}

novoUser({email:"teste@teste.com", status:false})