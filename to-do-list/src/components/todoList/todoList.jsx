import React from 'react'
import './style.css'
const TodoList = ({todo}) => {
  return (
    <div className="todoList">
          {
            todo.map((todo)=>
            <div className="content">
              <div className='info'>
                <p>{todo.descricao}</p>
                <p>{todo.categoria}</p>
              </div>
              <div className='buttons'>
                <button>X</button>
                <button>V</button>
              </div>
              
            </div>
            )
          }
        </div>
        
  )
}

export default TodoList