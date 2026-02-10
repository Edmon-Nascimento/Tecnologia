/*
    Classe armazena as características e ações que um objeto possui
    Conjunto de atributos e métodos
*/

class Loja{
    //Atributos
    nome: string;
    categoria: string;

    constructor(nome:string, categoria:string){
        this.nome = nome
        this.categoria = categoria
    }

    //Métodos
    criarLoja(){
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa:number, ...pedidos:string[]):string{

        pedidos.map((pedido)=>{
            console.log(`Saindo novo pedido: ${pedido}`)
        })

        return `Pedido na mesa: ${mesa}`
    }
}

const nwBurguer = new Loja("nw Burguer", "lanches")

const retornoLoja = nwBurguer.emitirPedido(49, "Suclo Gelado", "Hamburguer Duplo", "Coca 2L")

console.log(retornoLoja)