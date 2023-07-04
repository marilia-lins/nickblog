import React from 'react'
import './Post.css'
import styles from './Post.module.css'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'Paginas/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NaoEncontrada from 'Paginas/NaoEncontrada'
import PaginaPadrao from 'Paginas/PaginaPadrao'
import PostCard from 'Paginas/PostCard'

export default function Post() {

    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    
    if(!post){
        return <NaoEncontrada />
    }

    const postsRecomendados = posts 
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => a.id - b.id)
        .slice(0, 3)

  return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <>
                                <PostModelo 
                                    style={{backgroundColor: 'purple'}}
                                    titulo={post.titulo}
                                >
                                    <div className='post-markdown-container'>
                                        <ReactMarkdown>
                                            {post.texto}
                                        </ReactMarkdown>
                                    </div>

                                    <h2 className={styles.postsTitulo}>
                                        Leia também:
                                    </h2>

                                    <ul className={styles.postsFinais}>
                                        {postsRecomendados.map((post) => {
                                            return(
                                                <li key={post.id}>
                                                    <PostCard post={post}/>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </PostModelo>
                    </>            
                }/>
            </Route>
        </Routes>
  )
}
