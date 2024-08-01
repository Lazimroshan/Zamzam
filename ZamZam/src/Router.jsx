import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Pages/Menu'
import Home from './Pages/Home'


function Router() {
  return (
    <div>

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/menu' element={<Menu/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Router