import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Recipe = () => {

  const { recipeID } = useParams()
  const [ recipe, setRecipe ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
        setRecipe(data.meals[0])
        console.log(data.meals[0])
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setLoading(false)
    }
    getRecipe()
  }, [recipeID])

  return (
    loading ? <p>loading</p> 
      : error ? <p>error</p> 
      : 
      <Row xs="1" md="2" className="recipe-container">
        <Col className="overview">
          <h1>{recipe.strMeal}</h1>
          <p>About text</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <section className="buttons">
            <button className="btn btn-dark">View Original Recipe</button>
            <button className="btn btn-dark">Watch on YouTube</button>
          </section>
        </Col>
        <Col className="steps">
          <section className="ingredients">
            <h3>Ingredients</h3>
            <div className="ingredients-list">
              <ul>
                <li>{recipe.strIngredient1} - {recipe.strMeasure1}</li>
                <li>{recipe.strIngredient2} - {recipe.strMeasure2}</li>
                <li>{recipe.strIngredient3} - {recipe.strMeasure3}</li>
                <li>{recipe.strIngredient4} - {recipe.strMeasure4}</li>
                <li>{recipe.strIngredient5} - {recipe.strMeasure5}</li>
                <li>{recipe.strIngredient6} - {recipe.strMeasure6}</li>
                <li>{recipe.strIngredient7} - {recipe.strMeasure7}</li>
                <li>{recipe.strIngredient8} - {recipe.strMeasure8}</li>
                <li>{recipe.strIngredient9} - {recipe.strMeasure9}</li>
                <li>{recipe.strIngredient10} - {recipe.strMeasure10}</li>
              </ul>
              <ul>
                <li>{recipe.strIngredient11} - {recipe.strMeasure11}</li>
                <li>{recipe.strIngredient12} - {recipe.strMeasure12}</li>
                <li>{recipe.strIngredient13} - {recipe.strMeasure13}</li>
                <li>{recipe.strIngredient14} - {recipe.strMeasure14}</li>
                <li>{recipe.strIngredient15} - {recipe.strMeasure15}</li>
                <li>{recipe.strIngredient16} - {recipe.strMeasure16}</li>
                <li>{recipe.strIngredient17} - {recipe.strMeasure17}</li>
                <li>{recipe.strIngredient18} - {recipe.strMeasure18}</li>
                <li>{recipe.strIngredient19} - {recipe.strMeasure19}</li>
                <li>{recipe.strIngredient20} - {recipe.strMeasure20}</li>
              </ul>
            </div>
          </section>
          <section className="how-to">
            <h3>How To</h3>
            <p>{recipe.strInstructions}</p>
          </section>
        </Col>
      </Row>
  )
}

export default Recipe