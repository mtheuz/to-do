import React from 'react'
import './style.css'
const todoList = ({todo}) => {
  return (
    <div className="todoList">
          {
            todo.map((todo)=>
            <div className="content">
              <p>{todo.descricao}</p>
              <p>{todo.categoria}</p>
            </div>
            )
          }
        </div>
        
  )
}

export default todoList