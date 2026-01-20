import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {

  const [phraseText, setPhraseText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(0)

    const allPhrases = [
  {
    id: 1,
    nome: "Motivação",
    frases: [
      'A persistência é o caminho do êxito.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite.',
      'O sucesso é a soma de pequenos esforços repetidos diariamente.',
      'Acredite em você e tudo será possível.',
      'Nunca é tarde para ser aquilo que você poderia ter sido.',
      'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
      'Faça hoje o que outros não fazem para viver amanhã como outros não vivem.',
      'A coragem não é ausência do medo, é agir apesar dele.',
      'Grandes batalhas só são dadas a grandes guerreiros.',
      'Você é mais forte do que imagina.',
      'Não espere por oportunidades, crie-as.',
      'Sonhos não funcionam se você não trabalhar.',
      'O fracasso é apenas uma oportunidade para recomeçar com mais experiência.',
      'A disciplina é a ponte entre metas e conquistas.',
      'A vida começa no fim da sua zona de conforto.',
      'Seja a mudança que você quer ver no mundo.',
      'Quem tem um porquê enfrenta qualquer como.',
      'Não desista, o começo é sempre o mais difícil.',
      'Tudo é possível àquele que acredita.',
      'O sucesso nasce do querer, da determinação e persistência.',
      'O medo limita, a fé impulsiona.',
      'Acredite: coisas incríveis levam tempo.',
      'Você não precisa ser perfeito, só precisa começar.',
      'A força não vem da capacidade física, vem da vontade.',
      'Trabalhe em silêncio e deixe o sucesso fazer barulho.',
      'Nada muda se você não mudar.',
      'Seja consistente, não perfeito.',
      'Todo progresso acontece fora da zona de conforto.',
      'Você chegou até aqui porque é capaz.',
      'A vitória é construída todos os dias.',
      'Não pare quando estiver cansado, pare quando terminar.',
      'Cada esforço conta.',
      'O impossível é só questão de opinião.',
      'A mente acredita, o corpo alcança.',
      'Persistir é a chave.',
      'Você é o seu único limite.',
      'Comece onde você está.',
      'Nunca foi sorte, sempre foi esforço.',
      'Sonhe grande, comece pequeno.',
      'A ação vence o medo.',
      'Não espere motivação, crie disciplina.',
      'Quem acredita sempre alcança.',
      'A jornada vale a pena.',
      'Faça acontecer.',
      'Você nasceu para vencer.',
      'Foque no progresso.',
      'Tudo começa com um passo.',
      'Confie no processo.'
    ]
  },
  {
    id: 2,
    nome: "Bom dia",
    frases: [
      'Bom dia! Que hoje seja leve, produtivo e feliz.',
      'Cada manhã é uma nova chance para recomeçar.',
      'Bom dia! A vida te deu mais uma oportunidade.',
      'Que seu dia comece bem e termine melhor ainda.',
      'Bom dia! Gratidão por mais um amanhecer.',
      'Acorde com fé e coragem.',
      'Bom dia! Espalhe coisas boas por onde passar.',
      'Que hoje não falte paz, amor e café.',
      'Todo dia é um novo começo.',
      'Bom dia! Que seu sorriso seja o primeiro compromisso.',
      'Que a luz deste dia ilumine seus passos.',
      'A vida começa todas as manhãs.',
      'Bom dia! Respire fundo e vá.',
      'Hoje é dia de fazer acontecer.',
      'Bom dia! Seja sua melhor versão hoje.',
      'Que seu dia seja guiado pela esperança.',
      'Acordar é um privilégio.',
      'Bom dia! Que não falte coragem.',
      'Que hoje seja um dia abençoado.',
      'Bom dia! Espalhe positividade.',
      'A felicidade mora nas pequenas conquistas do dia.',
      'Bom dia! Vá com calma e com fé.',
      'Que o bem te acompanhe hoje.',
      'Todo amanhecer traz novas possibilidades.',
      'Bom dia! Confie no que está por vir.',
      'Que hoje você tenha mais motivos para sorrir.',
      'Bom dia! Faça valer a pena.',
      'Mais um dia para agradecer.',
      'A vida se renova a cada amanhecer.',
      'Bom dia! O melhor ainda está por vir.',
      'Que seu dia seja cheio de boas notícias.',
      'Acorde acreditando.',
      'Bom dia! Seja luz.',
      'Que hoje você colha coisas boas.',
      'Todo dia é um presente.',
      'Bom dia! Não desista.',
      'Comece o dia com pensamentos positivos.',
      'Que hoje tenha paz no coração.',
      'Bom dia! O dia é seu.',
      'A fé renova as manhãs.',
      'Bom dia! Vá sem medo.',
      'Que o dia seja gentil com você.',
      'A vida sorri para quem acredita.',
      'Bom dia! Aproveite o agora.',
      'Que hoje seja simples e feliz.',
      'Bom dia! Um passo de cada vez.',
      'Que não falte esperança.',
      'Bom dia! Faça o seu melhor.',
      'Hoje tudo pode mudar.',
      'Bom dia! Confiança no caminho.'
    ]
  },
  {
    id: 3,
    nome: "Boa noite",
    frases: [
      'Boa noite! Que o descanso renove suas forças.',
      'Que a paz acompanhe seu sono.',
      'Boa noite! Amanhã será um novo dia.',
      'Durma com gratidão no coração.',
      'Boa noite! Descanse a mente.',
      'Que seus sonhos sejam leves.',
      'Boa noite! Tudo ficará bem.',
      'O dia termina, a esperança permanece.',
      'Boa noite! Relaxe e confie.',
      'Que a noite traga tranquilidade.',
      'Boa noite! Hora de desacelerar.',
      'Durma em paz.',
      'Boa noite! Que o amanhã venha melhor.',
      'Descanse, você fez o seu melhor.',
      'Boa noite! Que os sonhos sejam bons.',
      'A noite cura o cansaço do dia.',
      'Boa noite! Entregue suas preocupações.',
      'Que o sono seja reparador.',
      'Boa noite! Silencie a mente.',
      'O descanso também é produtividade.',
      'Boa noite! Confie no amanhã.',
      'Que a noite traga conforto.',
      'Boa noite! Gratidão pelo dia.',
      'Durma com fé.',
      'Boa noite! Tudo tem seu tempo.',
      'Que a paz te envolva.',
      'Boa noite! Respire fundo.',
      'O amanhã começa com um bom descanso.',
      'Boa noite! Desligue-se.',
      'Que o sono leve o que pesa.',
      'Boa noite! Recarregue-se.',
      'Durma tranquilo.',
      'Boa noite! Novas chances virão.',
      'Que os sonhos tragam esperança.',
      'Boa noite! Confiança no futuro.',
      'O silêncio da noite acalma.',
      'Boa noite! Relaxe.',
      'Que a noite seja gentil.',
      'Boa noite! Você merece descansar.',
      'Durma bem.',
      'Boa noite! Amanhã recomeça.',
      'Que a calma tome conta.',
      'Boa noite! Tudo passa.',
      'Descanse o corpo e a alma.',
      'Boa noite! Bons sonhos.',
      'Que a noite renove sua fé.',
      'Boa noite! Hora de pausar.',
      'Durma em serenidade.',
      'Boa noite! Até amanhã.',
      'Que o descanso te fortaleça.'
    ]
  }
]


  function handleSwitchCategory(index:number){
    setSelectedCategory(index)
  }

  function handlePhrase(){
    const randomNumber = Math.floor(Math.random() * allPhrases[selectedCategory].frases.length)

   setPhraseText(allPhrases[selectedCategory].frases[randomNumber])
  }


  return (
    <main>
      <img src={logoImg} alt="Dev Frases" className='logo' />

      <h2 className='title'>Categorias</h2>

      <div className='category-area'>
        {allPhrases.map( (item, index) => (
          <button 
          key={item.id} 
          className='category-button' 
          style={
            {
              background: item.nome === allPhrases[selectedCategory].nome ? "#1fa4db": "white",
              color: item.nome === allPhrases[selectedCategory].nome ? "white": "black"
            }}
          onClick={()=>{handleSwitchCategory(index)}}
          >
            {item.nome} 
            </button>
        ))}
        
      </div>

      <button className='generate-button' onClick={()=>{handlePhrase()}}>Gerar Frase</button>

      {phraseText !="" && <p className='phrase-text'> {`" ${phraseText} "`}</p>}
    </main>
  )
}

export default App
