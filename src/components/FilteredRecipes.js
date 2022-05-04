import React from 'react'

// States for filtering

const FilteredRecipes = ({ filteredRecipes }) => {
  return (
    <section className = 'all-container'>
      <div className='all-detail-grid'>
        {filteredRecipes.map(recipe => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = recipe
          return (
            <div className='all-card' key = {id}>
              <div className = 'all-title'>{name}</div>
              <img src={img} alt = {name} />
            </div>
          )
        })}
        </div>
    </section>
  )
}

export default FilteredRecipes