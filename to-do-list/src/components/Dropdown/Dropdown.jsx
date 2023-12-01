import React from 'react'
import Select from 'react-select'

function Dropdown() {
    const options = [
        { value: 'Trabalho', label: 'Trabalho' },
        { value: 'Pessoal', label: 'Pessoal' },
        { value: 'Estudo', label: 'Estudo' }
      ]
  return (
    <>
     <Select options={options} />
    </>
  )
}

export default Dropdown