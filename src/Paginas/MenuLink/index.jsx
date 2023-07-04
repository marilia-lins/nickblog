import React from 'react'
import style from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {
    
  return (
    <>
        <NavLink className={({ isActive }) => ` ${style.link} ${isActive ? style.clickedLink : ""} `} to={to} end> 
            {children}
        </NavLink>
        
    </>
  )
}
