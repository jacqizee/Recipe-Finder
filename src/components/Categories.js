import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'



const Categories = () => {


  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setErrors ] = useState(false)


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
    <Container>
      <h1>Categories</h1>
      <Row>
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : 
        categories.map(category => {
          const { strCategory, idCategory, strCategoryThumb } = category
          return (
            <Link to={`/category/${strCategory}`} key={idCategory}>
              <Col md='4'>
                <div className = 'category-tile'>{strCategory}
                  <img src={strCategoryThumb} alt ='category'/>
                </div>
              </Col>
            </Link>
          )
        })}
      </Row>
    </Container>
  )
}


export default Categories