import React from 'react'
import style from './Menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu() {

  return (
    <div className={style.nav}>
        <MenuLink to="/">
            Início
        </MenuLink>
        <MenuLink to="/sobremim">
            Sobre Mim
        </MenuLink>
    </div>
  )
}
