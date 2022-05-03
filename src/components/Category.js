import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

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
    <Container className="category-container">
      <h1>{categoryID}</h1>
      <Row>
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : 
        category.map(dish => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = dish
          return (
            <Link to={`/recipe/${id}`} key={id}>
              <Col md='3'>
                <div className = 'category-tile'>{name}
                  <img src={img} alt ={name}/>
                </div>
              </Col>
            </Link>
          )
        })}
      </Row>
    </Container>
  )
}

export default Category