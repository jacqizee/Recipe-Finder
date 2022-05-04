import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import PageNotFound from './PageNotFound'

const Categories = () => {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setErrors] = useState(false)

  useEffect(() => {

    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        console.log(data)
        setCategories(data.categories)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
      setLoading(false)
    }
    getCategories()
  }, [])

  return (
    <section className='category-container'>
      <h1>Categories</h1>
      <div className="category-content">
        {loading ? <p>loading</p>
          : error ? <p>error</p>
            : !categories ? <PageNotFound /> :
            categories.map(category => {
              const { strCategory, idCategory, strCategoryThumb } = category
              return (
                <Link to={`/category/${strCategory}`} key={idCategory}>
                  <div className='category-tile'>
                    <div className='category-title'>{strCategory}</div>
                    <img src={strCategoryThumb} alt='category' />
                  </div>
                </Link>
              )
            })}
      </div>
    </section>
  )
}


export default Categories