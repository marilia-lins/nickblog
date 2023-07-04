import React from 'react'
import style from './Banner.module.css'
import banner from './banner1.png'

export default function Banner() {
  return (
    <div className={style.banner}>
        <div className={style.text}>
            <h1 className={style.title}>Nick Blog</h1>
            <p className={style.intro}>Bem vindos a este mini blog, onde eu relembro os programas que mais assistia na infância, transmitidos pelo canal Nickelodeon.</p>
        </div>

        <div className={style.image}>
            <img className={style.img} src={banner} alt="logo da nick" />
        </div>
    </div>
  )
}
