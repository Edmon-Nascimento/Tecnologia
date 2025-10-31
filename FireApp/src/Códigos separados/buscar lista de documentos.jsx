import { useState } from "react"
import { db } from "./firebaseConnection"
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [posts, setPosts] = useState([])

  async function buscarPosts() {
    const postRef = collection(db, "posts")
    await getDocs(postRef)
      .then((snapshot) => {
        let lista = []
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })
        setPosts(lista)
      })
      .catch((error) => {
        console.log("Erro ao buscar:", error)
      })
  }

  return (
    <div>
      <h1>Listar Posts</h1>
      <button onClick={buscarPosts}>Buscar</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.titulo}</strong> - {post.autor}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
