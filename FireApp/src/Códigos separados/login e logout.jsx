import { useState } from "react"
import { auth } from "./firebaseConnection"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState(null)

  async function login() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      setUser(value.user)
    })
    .catch((error) => {
      console.log("Erro:", error)
    })
  }

  async function logout() {
    await signOut(auth)
    setUser(null)
  }

  return (
    <div>
      <h1>Login / Logout</h1>

      {user ? (
        <div>
          <p>Logado como: {user.email}</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <>
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input placeholder="Senha" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} />
          <button onClick={login}>Entrar</button>
        </>
      )}
    </div>
  )
}

export default App
