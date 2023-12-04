import React from 'react'
import './style.css'
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
const TodoList = ({todo}) => {
  return (
    <div className="todoList">
          {
            todo.map((todo)=>
            <div className="content">
              <div className='info'>
                <p>{todo.descricao}</p>
                <div>
                  
                </div>
                <p className='categoria'>{todo.categoria}</p>
              </div>
              <div className='buttons'>
                <button className='button-options'><FaCheckSquare  color='#00FF00' size={25}/></button>
                <button className='button-options'><FaWindowClose color='#FF0000' size={25}/></button>
              </div>
              
            </div>
            )
          }
        </div>
        
  )
}

export default TodoList