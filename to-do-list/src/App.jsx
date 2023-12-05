import { useState } from 'react'
import './App.css'
import TodoList from './components/todoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import Pesquisa from './components/Pesquisa/Pesquisa'



function App() {
  const[pesquisa,setPesquisa] = useState('')
  const[escolhaCategoria, setEscolhaCategoria] = useState('')
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

  const removerTarefa = (id) =>{
    const novasTarefas = [...todo]
    const filtroTarefas = novasTarefas.filter((tarefa) => tarefa.id != id ? tarefa : null)
    setTodo(filtroTarefas)

  }
  const completarTarefa = (id) =>{
    const novasTarefas = [...todo]
    novasTarefas.map((tarefa) => tarefa.id == id ? (tarefa.situacao = !tarefa.situacao) : todo)
    setTodo(novasTarefas)

  }

  return (
    <>
      <div className="title">
        <h1>TO-DO LIST</h1>
      </div>
      <div className="container">
        <div>
          <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} categoria={escolhaCategoria} setEscolhaCategoria={setEscolhaCategoria}/>
        </div>
        <TodoList 
        todo={todo} 
        key={todo.id} 
        removerTarefa={removerTarefa} 
        completarTarefa={completarTarefa}
        pesquisa={pesquisa}
        />
        <TodoForm adicionarTarefa={adicionarTarefa} />
      </div>
      
    </>
  )
}

export default App
