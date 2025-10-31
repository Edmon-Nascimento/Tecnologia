// Importa o banco de dados (db) e autenticação (auth)
import { db, auth } from "./firebaseConnection"
// Importa hooks do React para gerenciar estados e efeitos
import { useState, useEffect } from "react"

// Importa funções do Firestore (CRUD e leitura em tempo real)
import {
  doc, setDoc, collection, addDoc, getDoc, getDocs,
  updateDoc, deleteDoc, onSnapshot
} from "firebase/firestore"

// Importa funções de autenticação (criar, logar, sair, observar usuário)
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth"

import "./App.css"

function App() {

  // Estados (variáveis reativas)
  const [titulo, setTitulo] = useState("")      // título do post
  const [autor, setAutor] = useState("")        // autor do post
  const [posts, setPosts] = useState([])        // lista de posts
  const [idPost, setIdPost] = useState('')      // id do post (para atualizar/deletar)
  const [email, setEmail] = useState('')        // email do usuário
  const [senha, setSenha] = useState('')        // senha do usuário
  const [user, setUser] = useState(false)       // se o usuário está logado
  const [userDetail, setUserDetail] = useState({}) // dados do usuário logado

  // 🔁 Lê posts em tempo real do Firestore
  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "primeira coleção"), (snapshot) => {
        let listaPost = []
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })
        setPosts(listaPost) // atualiza o estado com os posts
      })
    }
    loadPosts()
  }, [])

  // 👤 Verifica se o usuário está logado
  useEffect(()=>{
    async function checkLogin() {
      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(true)
          setUserDetail({
            uid: user.uid,
            email: user.email
          })
        }else{
          setUser(false)
          setUserDetail({})
        }
      })
    }
    checkLogin()
  }, [])

  // ➕ Adiciona novo post no Firestore
  async function adicionarItem() {
    await addDoc(collection(db, "primeira coleção"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      alert("Dados registrados com sucesso")
    })
    .catch((error) => {
      console.log("Erro: " + error)
    })
  }

  // 🔍 Busca todos os posts (sem realtime)
  async function buscarPost() {
    const postRef = collection(db, "primeira coleção")
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
      console.log("Erro: " + error)
    })
  }

  // ✏️ Atualiza um post específico
  async function atualizarPost() {
    const docRef = doc(db, "primeira coleção", idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      setIdPost('')
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log("Erro: " + error)
    })
  }

  // ❌ Exclui um post pelo ID
  async function excluirPost(id) {
    const docRef = doc(db, "primeira coleção", id)
    await deleteDoc(docRef)
    .then(() => {
      alert("Post deletado com sucesso!")
    })
    .catch((error) => {
      console.log("Erro: " + error)
    })
  }

  // 👶 Cria novo usuário no Auth
  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      console.log("Usuário cadastrado com sucesso")
      console.log(value)
      setEmail("")
      setSenha("")
    })
    .catch((error) => {
      console.log("Erro: " + error)
      if(error.code === "auth/weak-password"){
        alert("Senha muito fraca")
      }else if(error.code === "auth/email-already-in-use"){
        alert("Email já existe!")
      }
    })
  }

  // 🔑 Faz login do usuário
  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value)=>{
      console.log("Usuário logado com sucesso")
      console.log(value.user)

      setUserDetail({
        uid: value.user.uid,
        email: value.user.email
      })
      setUser(true)
      setEmail("")
      setSenha("")
    })
    .catch((error)=>{
      console.log("Erro: " + error)
    })
  }

  // 🚪 Faz logout
  async function fazerLogout(){
    await signOut(auth)
    setUser(false)
    setUserDetail({})
  }

  // 🧱 Interface principal
  return (
    <main>
      <h1>ReactJS + Firebase</h1>

      {/* Exibe dados do usuário logado */}
      { user && (
        <div>
          <strong>Seja bem-vindo(a)</strong>
          <p>Você está logado!</p>
          <p>ID: {userDetail.uid}</p>
          <p>Email: {userDetail.email}</p>
          <button onClick={fazerLogout}>Sair da conta</button>
        </div>
      )}

      {/* Área de login/cadastro */}
      <section className="login">
        <h2>Cadastrar novo usuário</h2>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="********"
          />
        </div>

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Fazer login</button>
      </section>

      <hr />

      {/* Formulário de posts */}
      <div className="form-section">
        <div className="input-group">
          <label htmlFor="idpost">Digite o Id do Post:</label>
          <input
            type="text"
            id="idpost"
            value={idPost}
            onChange={(e) => setIdPost(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="titulo">Título do documento:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="autor">Autor do documento:</label>
          <input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button onClick={adicionarItem}>Cadastrar</button>
          <button onClick={buscarPost}>Buscar</button>
          <button onClick={atualizarPost}>Atualizar Post</button>
        </div>
      </div>

      {/* Lista de posts */}
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <p><strong>Id:</strong> {post.id}</p>
            <p><strong>Título:</strong> {post.titulo}</p>
            <p><strong>Autor:</strong> {post.autor}</p>
            <button onClick={() => excluirPost(post.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
 