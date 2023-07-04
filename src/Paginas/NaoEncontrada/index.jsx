import Botao from 'Paginas/Botao'
import style from './NaoEncontrada.module.css'
import drakejoshgif from './drakenjosh.gif'

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {

    const navegar = useNavigate()

  return (
    <>
        <div className={style.container}>
            <span className={style.titulo404}>
                404
            </span>
            <h1 className={style.titulo}>
                Algo deu errado! Página não encontrada.
            </h1>
            <div className={style.gif}>
                <img src={drakejoshgif} alt="gif" />
            </div>
            <p className={style.paragrafo}> 
                Tem certeza de que era isso que você procurava?
            </p>
            <p className={style.paragrafo}>
                Recarregue a página ou volte para o início.
            </p>

            <div 
                className={style.botao}
                onClick={() => navegar(-1)}
            >
                <Botao size="voltar"> Voltar </Botao>
            </div>

        </div>
    </>
  )
}
