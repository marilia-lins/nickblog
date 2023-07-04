import React from 'react'
import style from './Inicio.module.css'
import posts from 'json/posts.json'
import PostCard from 'Paginas/PostCard'

export default function Inicio() {
  return (
        <ul className={style.posts}>
            {posts.map((post) => {
              return(
                <li key={post.id}>
                  <PostCard post={post}/>
                </li>
              )
            })}
        </ul>
  )
}
