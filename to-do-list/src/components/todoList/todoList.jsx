import React from 'react'
import './style.css'
import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
const TodoList = ({todo, removerTarefa, completarTarefa,pesquisa, categoria}) => {
  return (
    <div className="todoList">
          {
            todo
            .filter((tarefa) => tarefa.descricao.toLowerCase().includes(pesquisa.toLowerCase()) &&
                (categoria === "" || tarefa.categoria === categoria))
            .map((todo)=>
            <div className="content" >
              <div className='info'>
                <p style={{textDecoration: todo.situacao? "line-through" : ""}}>{todo.descricao}</p>
                <div>
                </div>
                <p className='categoria'>{todo.categoria}</p>
              </div>
              <div className='buttons'>
                <button className='button-options' onClick={() => completarTarefa(todo.id)}><FaCheckSquare  color='#00FF00' size={25} /></button>
                <button className='button-options' onClick={() => removerTarefa(todo.id)}><FaWindowClose color='#FF0000' size={25} /></button>
              </div>
              
            </div>
            )
          }
        </div>
        
  )
}

export default TodoList