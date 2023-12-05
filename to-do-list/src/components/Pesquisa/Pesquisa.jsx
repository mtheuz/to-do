import React from 'react'
import './style.css'
function Pesquisa({pesquisa, setPesquisa, setEscolhaCategoria, categoria}) {
  return (
    <div className="pesquisa">
          <p className='titulo-pesquisa'>PESQUISA</p>
          <input 
          className='input-pesquisa' 
          type="text" 
          placeholder='Digite o titulo'
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          />
            <select 
            className='select-options' 
            value={categoria}
            onChange={(e)=> {setEscolhaCategoria(e.target.value) }}
            >
              <option value="">Selecione a categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
            </select>
          </div>
  )
}

export default Pesquisa