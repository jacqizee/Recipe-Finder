import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import PageNotFound from './PageNotFound'

const Category = () => {

  const { categoryID } = useParams()
  const [ category, setCategory ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryID}`)
        setCategory(data.meals)
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setLoading(false)
    }
    getCategory()
  }, [categoryID])

  return (
    <section className="cat-container">
      <h1>{categoryID}</h1>
      <div className='cat-detail-grid'>
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : !category ? <PageNotFound /> :
        category.map(dish => {
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

export default Category