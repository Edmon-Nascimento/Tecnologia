import Header from './components/Header/Header.js'
import Dev from './components/Dev/Dev.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
      <Header/>
      <Dev nome="Edmon Nascimento" idade={24}/>
      <Dev nome="..." idade={0}/>
      <Footer/>
    </div>
  )
}

export default App

