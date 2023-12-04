import { useState } from 'react'
import './App.css'
import TodoList from './components/todoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'



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
    }
  ])
  const adicionarTarefa = (categoria, valor) =>{

    const novasTarefas = [...todo,
    {id: Math.floor(Math.random() * 1000),
      descricao: valor,
      categoria: categoria,
      situacao: false
    }
    ];
    setTodo(novasTarefas)
  }
  return (
    <>
      <div className="title">
        <h1>TO-DO LIST</h1>
      </div>
      <div className="container">
        <div>
          <div className="pesquisa">
          <p className='titulo-pesquisa'>PESQUISA</p>
          <input className='input-pesquisa' type="text" placeholder='Digite o titulo'/>
            <select className='select-options'>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
            </select>
          </div>
        </div>
       
        <TodoList todo={todo} key={todo.id}/>
        <TodoForm adicionarTarefa={adicionarTarefa}/>
      </div>
      
    </>
  )
}

export default App
