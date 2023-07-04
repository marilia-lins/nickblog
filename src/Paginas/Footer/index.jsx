import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import React from 'react'

export default function Footer() {
  return (
    <footer className={style.footer}>

      Desenvolvido por Marília Lins | 2023 |

        <ul className={style.links}>
                <Link to='https://www.linkedin.com/in/mar%C3%ADlia-gabriela-693a30239/'>
                    <i class="fab fa-linkedin"></i>
                </Link>
                <Link to='https://github.com/marilia-lins'>
                    <i class="fab fa-github"></i>
                </Link>
        </ul>
        </footer>
  )
}
