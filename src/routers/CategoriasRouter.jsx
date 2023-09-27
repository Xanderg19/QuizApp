import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../components/Inicio'
import { Deporte } from '../components/Deporte'
import { Historia } from '../components/Historia'
import { Programacion } from '../components/programacion'



export const CategoriasRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/deporte' element={<Deporte />}/>
            <Route path='/historia' element={<Historia />}/>
            <Route path='/programacion' element={<Programacion />}/>
        </Routes>
    </BrowserRouter>
  )
}
