
interface NovoProduto<V extends number> {
  nome: string;
  preco: V;

  formatar(valor: V): string;
}

// interface NovoProduto<V extends number | string>{
//   nome: string;
//   preco: V;
// }

const arroz: NovoProduto<number> = {
  nome: "Arroz Branco",
  preco: 1500,
  formatar(valor: number): string {

    let valorFormatado = valor.toLocaleString('pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )

    return valorFormatado;
  }
}

console.log(arroz)

console.log(arroz.formatar(arroz.preco))

