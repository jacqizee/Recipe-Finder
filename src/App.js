import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/Home'
import Categories from './components/Category'
import Region from './components/Region'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Category' element = {<Categories />} />
        <Route path = '/Region' element = {<Region />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App