import React, { useState } from 'react'
import './style.css'
function TodoForm({adicionarTarefa}) {
  const[valorTarefa, setValorTarefa] = useState('')
  const[categoria, setCategoria] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault()
    if(!valorTarefa || !categoria) {
      console.log('dados não preenchidos')
      return
    };
    adicionarTarefa(categoria,valorTarefa)
    setCategoria("")
    setValorTarefa("")
  }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <h1 className='titulo'>Crie sua tarefa</h1>
        <div className="containerForm">
          <input className='input-pesquisa' value={valorTarefa} type="text" onChange={(e) => setValorTarefa(e.target.value)}/>
            <select className='select-options' value={categoria}onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione a categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
            </select>
            
        </div>
        <div className='buttonSubmit'>
            <button type="submit" className='button-form'>Criar</button>
        </div>
        </form>
    </div>
  )
}

export default TodoForm