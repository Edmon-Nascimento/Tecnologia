import { useState } from "react"
import { auth } from "./firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrar() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Usuário criado!")
      setEmail("")
      setSenha("")
    })
    .catch((error) => {
      console.log("Erro:", error)
    })
  }

  return (
    <div>
      <h1>Criar Usuário</h1>
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  )
}

export default App
