

interface CursoProps{
    id: string;
    nome: string;
    preco: number;

    promocao: (preco: number)=> void;
}

function mostraPromocao(preco: number): void{
    console.log(`Promoção no curso por apenas: R$ ${preco}`)
}

const novoCurso: CursoProps ={
    id: "5198",
    nome:"Curso Typescript",
    preco: 750,

    //É possível atribuir diretamente por função anônima
    promocao: mostraPromocao
}

console.log(novoCurso.promocao(350))