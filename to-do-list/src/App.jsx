import { useState } from 'react'
import './App.css'
import todoList from './components/todoList/todoList'

function App() {
  const[todo,setTodo] = useState([
    {id: 1,
      descricao: "Fazer almoço",
      categoria: "Estudo",
      situacao: false
    },
    {id: 2,
      descricao: "Correr",
      categoria: "Pessoal",
      situacao: false
    },
    {id: 3,
      descricao: "fazer task",
      categoria: "Trabalho",
      situacao: false
    },
  ])
  return (
    <>
      <div className="title">
        <h1>TO-DO-LIST</h1>
      </div>
      <div className="container">
        <todoList todo={todo}/>
      </div>
    </>
  )
}

export default App
