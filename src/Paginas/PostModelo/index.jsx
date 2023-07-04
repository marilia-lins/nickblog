import style from './PostModelo.module.css'

import React from 'react'

export default function PostModelo({ titulo, children }) {
  return (
    <article className={style.postContainer}>
        <div 
            className={style.topo}
            style={{backgroundColor: 'purple'}}
        >
            <h2 className={style.titulo}>{titulo}</h2>

            <div className={style.conteudo}>
                {children}
            </div>

        </div>
    </article>
  )
}
