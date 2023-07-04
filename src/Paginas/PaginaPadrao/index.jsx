import Banner from 'Paginas/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <main>
        <Banner />
        {/* renderizar conteudo da rota aqui */}
        <Outlet />
        
    </main>
  )
}
