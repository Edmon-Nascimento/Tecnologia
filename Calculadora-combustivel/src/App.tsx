import { useState, FormEvent } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

interface resultadoProps{
  title: string
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(1)
  const [resultado, setResultado] = useState<resultadoProps>()

  function calcular(e: FormEvent){
    e.preventDefault()

    const calculo = (alcoolInput/gasolinaInput)

    if (calculo <= 0.7){
      setResultado({
        title:"Compensa usar álcool"
      })
    }else{
      setResultado({
        title:"Compensa usar gasolina"
      })
    }
  }

  return (
    <main>
        <img className='logo' src={logoImg} alt="Logo da calculadora de combustível" />
        <h1 className='title'>Qual a melhor opção?</h1>

        <form action="" onSubmit={calcular}>
          <div>
            <label htmlFor="alcool">Álcool R$(preço por litro)</label>
            <input
            className='preco-input'
            type="number"
            name="alcool"
            id="alcool"
            min={1}
            step={0.01}
            placeholder='4,90'
            required
            value={alcoolInput}
            onChange={(e)=>setAlcoolInput(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="gasolina">Gasolina R$(preço por litro)</label>
            <input
            className='preco-input'
            type="number"
            name="gasolina"
            id="gasolina"
            min={1}
            step={0.01}
            placeholder='4,90'
            required
            value={gasolinaInput}
            onChange={(e)=>setGasolinaInput(Number(e.target.value))}
            />
          </div>
          <input className='calcular' type="submit" value="CALCULAR" />
        </form>

        {resultado && Object.keys(resultado).length >0 && (
          <section className='resultado'>
            <p>{resultado.title}</p>
          </section>
        )}
    </main>
  )
}

export default App
