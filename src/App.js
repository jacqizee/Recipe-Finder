import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Categories from './components/Categories'
import Category from './components/Category'
import Regions from './components/Regions'
import Region from './components/Region'
import Recipe from './components/Recipe'
import SiteNavbar from './components/SiteNavbar.js'

const App = () => {
  return (
    
    <BrowserRouter>
      <SiteNavbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/category' element = {<Categories />} />
        <Route path = '/category/:categoryID' element = {<Category />} />
        <Route path = '/region' element = {<Regions />} />
        <Route path = '/region/:regionID' element = {<Region />} />
        <Route path = '/recipe/:recipeID' element = {<Recipe />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App