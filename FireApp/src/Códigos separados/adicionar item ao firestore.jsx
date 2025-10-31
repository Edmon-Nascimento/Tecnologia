import { useState } from "react"
import { db } from "./firebaseConnection"
import { collection, addDoc } from "firebase/firestore"

function App() {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")

  async function adicionarItem() {
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      alert("Documento adicionado com sucesso!")
      setTitulo("")
      setAutor("")
    })
    .catch((error) => {
      console.log("Erro ao adicionar:", error)
    })
  }

  return (
    <div>
      <h1>Adicionar Post</h1>
      <input 
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input 
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
    </div>
  )
}

export default App
