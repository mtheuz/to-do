import React from 'react'
import './style.css'
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
const TodoList = ({todo, removerTarefa, completarTarefa,pesquisa}) => {
  return (
    <div className="todoList">
          {
            todo
            .filter((todo) => todo.descricao.toLowerCase().includes(pesquisa.toLowerCase()))
            .map((todo)=>
            <div className="content" style={{backgroundColor: todo.situcao? "green" : ""}}>
              <div className='info'>
                <p>{todo.descricao}</p>
                <div>
                  
                </div>
                <p className='categoria'>{todo.categoria}</p>
              </div>
              <div className='buttons'>
                <button className='button-options'><FaCheckSquare  color='#00FF00' size={25} onClick={() => completarTarefa(todo.id)}/></button>
                <button className='button-options'><FaWindowClose color='#FF0000' size={25} onClick={() => removerTarefa(todo.id)}/></button>
              </div>
              
            </div>
            )
          }
        </div>
        
  )
}

export default TodoList