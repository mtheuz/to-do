import { useState } from 'react'
import './App.css'
import TodoList from './components/todoList/todoList'

function App() {
  const[todo,setTodo] = useState([
    {id: 1,
      descricao: "Fazer almoco",
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
        <h1>TO-DO LIST</h1>
      </div>
      <div className="container">
        <div className="pesquisa">
          <p>PESQUISA</p>
          <input className='input-pesquisa' type="text" />
            <select className='select-options'>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
            </select>
        </div>
       
        <TodoList todo={todo}/>
      </div>
    </>
  )
}

export default App
