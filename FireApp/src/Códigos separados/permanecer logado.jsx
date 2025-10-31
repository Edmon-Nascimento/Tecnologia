import { useEffect, useState } from "react"
import { auth } from "./firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <h1>Usuário Logado Automaticamente</h1>
      {user ? (
        <p>Bem-vindo: {user.email}</p>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
    </div>
  )
}

export default App
