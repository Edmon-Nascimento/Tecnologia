import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  function handleRegister(){
    if(!input){
      alert("Digite uma tarefa")
      return
    }

    setTasks(tasks => [...tasks, input])
    setInput("")

    if(editTask.enabled){
      handleSaveEdit()
      return
    }

  }

  function handleDelete(item:string){
    const removeTask = tasks.filter(task => task !==item)
    setTasks(removeTask)
  }

  function handleEdit(item:string){
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks]

    allTasks[findIndexTask] = input
    setTasks(allTasks)

    setEditTask({
      enabled: false,
      task: ''
    })
    setInput("")
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
    

      <div className="task-input">
        <input
          type="text"
          name=""
          id=""
          placeholder='Digite uma tarefa'
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={handleRegister}>{editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}</button>
      </div>

      {tasks.map((item)=>(
        <section className='task-render' key={item}>
          <span>{item}</span>
          <button onClick={()=>handleEdit(item)}>Editar</button>
          <button onClick={()=> handleDelete(item)}>Excluir</button>

        </section>
      ))}
    </main>
  )
}

export default App
