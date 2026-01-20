import { useState } from "react"
import { db } from "./firebaseConnection"
import { doc, deleteDoc } from "firebase/firestore"

function App() {
  const [id, setId] = useState("")

  async function excluirPost() {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() => {
      alert("Post excluído com sucesso!")
      setId("")
    })
    .catch((error) => {
      console.log("Erro:", error)
    })
  }

  return (
    <div>
      <h1>Excluir Post</h1>
      <input 
        placeholder="ID do post"
        value={id}
        onChange={(e)=>setId(e.target.value)}
      />
      <button onClick={excluirPost}>Excluir</button>
    </div>
  )
}

export default App
