import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

const Home = () => {

  const [ random, setRandom ] = useState(null)
  
  useEffect(() => {
    const getRandom = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        setRandom(data.meals[0].idMeal)
      } catch (error) {
        console.log(error)
      }
    }
    getRandom()
  })

  return (
    <section className = 'home-container'>
      <h1>Recipe Finder</h1>
      <section className = 'home-content'>
        <Link to="/category">
          <div className="categories">
            <h2>Category</h2>
          </div>
        </Link>
        <Link to="/region">
          <div className="region">
            <h2>Region</h2>
          </div>
        </Link>
      </section>
      <section className = 'home-random'>
        <Link to={`/recipe/${random}`}>
          <button className = 'btn-random'>
            <h2>Random recipe</h2>
          </button>
        </Link>
      </section>

    </section>
  )

}

export default Home