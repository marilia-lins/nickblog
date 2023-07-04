import style from './Post.module.css'
import { Link } from 'react-router-dom'

import React from 'react'
import Botao from 'Paginas/Botao'

export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
        <div className={style.post}>
        <img 
            className={style.poster}
            src={`/assets/posts/${post.id}/poster.jpg`} alt="poster" 
        />
        <h2 className={style.titulo}>
            {post.titulo}
        </h2>
        <Botao>
          Ler
        </Botao>
    </div>
    </Link>
  )
}
