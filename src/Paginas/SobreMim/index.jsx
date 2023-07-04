import PostModelo from 'Paginas/PostModelo'
import React from 'react'
import style from './SobreMim.module.css'
import { Link } from 'react-router-dom'

export default function SobreMim() {
  return (
    <>
      <PostModelo titulo="Sobre Mim" />
      <div className={style.fundo}>
        <h3 className={style.subtitulo}>
          Olá, eu sou Marília Lins!
        </h3> 
        <p className={style.paragrafo}>
            Estou estudando Desenvolvimento Web, então, por que não praticar meus conhecimentos sobre a biblioteca React com um mini blog, e falando sobre coisas que gosto?
        </p>
        <p className={style.paragrafo}>
            Assim como Disney Chanel e Cartoon Network, Nickeloeon foi um dos canais que mais me influêciaram na época. Até hoje me divirto assistindo seus programas.
        </p>
        <p className={style.paragrafo}>
            Espero que você tenha gostado de ler minhas opiniões sobre as séries da Nick. Todo o layout das páginas foi inpirado nas cores e fontes do próprio canal.
            A aplicação si foi inspirada em    
            <Link className={style.link} to="https://ola-mundo-bay.vercel.app/">
                Olá Mundo! 
            </Link>   
             desenvolvida por Antônio Evaldo, instrutor na Alura.
        </p>
        <p className={style.paragrafo}>
          Upado inicialmente em julho de 2023
        </p>
      </div>

    </> 
  )
}
