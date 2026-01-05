interface DevProps{
  nome: string;
  idade: number;
}

function Dev( {nome, idade}:DevProps){
  return(
    <div>
      <h2>Dev: {nome}</h2>
      <h2>Idade: {idade}</h2>
    </div>
  )
}

export default Dev
