import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Favorites = () => {
  
  const favArray = JSON.parse(window.localStorage.getItem('fav-recipes')) 

  return (
    <section className="fav-container">
      <h1>Favorites</h1>
      <div className='fav-detail-grid'>
        {favArray.map(dish => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = dish
          return (
            <Link to={`/recipe/${id}`} key={id}>
              <div className='fav-detail-card'>
                <div className = 'fav-title'>{name}</div>
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