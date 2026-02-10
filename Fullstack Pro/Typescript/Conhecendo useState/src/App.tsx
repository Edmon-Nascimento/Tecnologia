import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")

  function mostrarNome(){
    alert(input)
    setInput("")
  }

  return (
    <>
      <h1>Conhecendo useState</h1>

      <input type="text" 
      placeholder='Digite seu nome'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      <br /><br />
     <button onClick={mostrarNome}>Mostrar Nome</button>
    </>
  )
}

export default App
