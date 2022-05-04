import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import PageNotFound from './utility/PageNotFound'

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
    <section className="region-container">
      <h1>{regionID}</h1>
      <div className ="region-detail">
        {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : !region ? <PageNotFound /> :
        region.map(dish => {
          const { idMeal: id, strMeal: name, strMealThumb: img } = dish
          return (
            <Link to={`/recipe/${id}`} key={id}>
              <div className = 'region-tile'>
                <div className = 'area-title'>{name}</div>
                <img src={img} alt ={name}/>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Region