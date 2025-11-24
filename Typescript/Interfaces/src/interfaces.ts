
/*let loja:object

loja = {
    nome: "ENS",
    endereco: "Rua x",
    status: true
}*/

//Contrato de criação de objeto

interface LojaProps{
    nome:string;
    endereco:string;
    status:boolean;
}

const ENS: LojaProps = {
    nome:"ENS",
    endereco:"Rua x",
    status:true
}


//É possível utilizar em funções também

function novaLoja({nome,endereco,status}:LojaProps):void{
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Enderaço da loja ${endereco}`)
    console.log(`Status da loja ${status}`)
}