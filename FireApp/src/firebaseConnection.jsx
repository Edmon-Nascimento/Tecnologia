// Importa funções principais do Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Configurações do seu projeto no Firebase
const firebaseConfig = {
  apiKey: "chave do seu projeto",
  authDomain: "domínio de autenticação",
  projectId: "id do projeto",
  storageBucket: "armazenamento de arquivos",
  messagingSenderId: "id para mensagens",
  appId: "id do app",
  measurementId: "id de métricas"
}

// Inicializa o app Firebase com as configurações acima
const firebaseApp = initializeApp(firebaseConfig)

// Cria uma instância do banco de dados Firestore
const db = getFirestore(firebaseApp)

// Cria uma instância do sistema de autenticação
const auth = getAuth(firebaseApp)

// Exporta para usar em outros arquivos
export { db, auth }
