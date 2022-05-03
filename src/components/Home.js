import React from 'react'


const Home = () => {
  

  return (
    <section className = 'home-container'>
      <h1>Recipe Finder</h1>
      <section className = 'home-content'>
        <div className="categories">
          <h2>Category</h2>
        </div>
        <div className="region">
          <h2>Region</h2>
        </div>
      </section>
      <section className = 'home-random'>
        <button className = 'btn-random'>
          <h2>Random recipe</h2>
        </button>
      </section>

    </section>
  )

}

export default Home