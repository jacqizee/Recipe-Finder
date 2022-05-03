import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

const Region = () => {

  const { regionID } = useParams()
  const [ region, setRegion ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  
  useEffect(() => {
    const getRegion = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${regionID}`)
        setRegion(data.meals)
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setLoading(false)
    }
    getRegion()
  }, [regionID])

  return (
    <Container className="region-container">
      <h1>{regionID}</h1>
      <Row>
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : 
        region.map(dish => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = dish
          return (
            <Link to={`/recipe/${id}`} key={id}>
              <Col md='3'>
                <div className = 'region-tile'>{name}
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

export default Region