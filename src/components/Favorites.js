import React from 'react'
import { Link } from 'react-router-dom'

const Favorites = () => {
  
  const favArray = JSON.parse(window.localStorage.getItem('fav-recipes')) 

  return (
    <section className="cat-container">
      <h1>Favorites</h1>
      <div className='cat-detail-grid'>
        {favArray.map(dish => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = dish
          return (
            <Link to={`/recipe/${id}`} key={id}>
              <div className='cat-detail-card'>
                <div className = 'cat-title'>{name}</div>
                <img src={img} alt ={name}/>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Favorites