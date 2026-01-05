

function App() {
  return (
    <div>
      <h1>Meu projeto</h1>
      <Desenvolvedor nome="Edmon Nascimento" idade={25}/>
      <Desenvolvedor nome="..." idade={0}/>
    </div>
  )
}

export default App

interface DevProps{
  nome: string;
  idade: number;
}

function Desenvolvedor( {nome, idade}:DevProps){
  return(
    <div>
      <h2>Dev: {nome}</h2>
      <h2>Idade: {idade}</h2>
    </div>
  )
}
