import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterFunction from './FilterFunction'
import FilteredRecipes from './FilteredRecipes'

const RecipeList = () => {

const [recipes, setRecipes] = useState([])
const [filteredRecipes, setFilteredRecipes] = useState([])
const [filters, setFilters] = useState({
    strInstructions: '',
    searchTerm: ''
  })

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
        console.log('fetching data',data)
        setRecipes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllRecipes()
  }, [])


  const handleChange = (e) => {
    const updatedObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(updatedObj)
    console.log(updatedObj)
  }


  useEffect(() => {
    if (recipes.length) {
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      const filtered = recipes.filter(recipe => {
        console.log(filtered)
        return regexSearch.test(recipe.strInstructions)
      })
      console.log('filtered',filtered)
      setFilteredRecipes(filtered)
    }
  }, [filters, recipes])


  return (
    <div className='filter-container'>
      <h1>All Recipes</h1>
      <FilterFunction filters = {filters} handleChange={handleChange} />
      <FilteredRecipes filteredRecipes={filteredRecipes}/>
    </div>
  )

}

export default RecipeList