import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'



const Region = () => {


  const [ regions, setRegions ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setErrors ] = useState(false)


  useEffect(() => {

    const getRegions = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        console.log(data)
        setRegions(data.meals)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
      setLoading(false)
    }
    getRegions()
  })



  return (
    <Container>
      <h1>Regions</h1>
      <Row>
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : 
        regions.map((region, index) => {
          const { strArea } = region
          return (
            
            <Col key={index} md='4'>
              <div className = 'area-tile' id ={strArea}>{strArea}
              </div>
      
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}


export default Region