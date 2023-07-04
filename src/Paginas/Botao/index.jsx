import style from './Botao.module.css'
import React from 'react'

export default function Botao({children, size}) {
  return (
    <button className={`
    ${style.botao}
    ${style[ size ]}
    `}>
      {children}
    </button>
  )
}
