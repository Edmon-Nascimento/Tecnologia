import { useState } from "react"
import { db } from "./firebaseConnection"
import { doc, updateDoc } from "firebase/firestore"

function App() {
  const [id, setId] = useState("")
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")

  async function atualizarPost() {
    const docRef = doc(db, "posts", id)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      alert("Post atualizado!")
    })
    .catch((error) => {
      console.log("Erro:", error)
    })
  }

  return (
    <div>
      <h1>Atualizar Post</h1>
      <input placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} />
      <input placeholder="Novo título" value={titulo} onChange={(e)=>setTitulo(e.target.value)} />
      <input placeholder="Novo autor" value={autor} onChange={(e)=>setAutor(e.target.value)} />
      <button onClick={atualizarPost}>Atualizar</button>
    </div>
  )
}

export default App

