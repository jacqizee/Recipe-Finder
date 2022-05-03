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
  let favoriteMessage = 'Add to Favorites'
  
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
        setRecipe(data.meals[0])
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setLoading(false)
    }
    getRecipe()
  }, [recipeID])

  const formatIngredients = () => {
    let ingredients = []
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(<li key={i}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`].toLowerCase()}</li>)
      }
    }
    return ingredients
  }

  const addFav = () => {
    let favArray = JSON.parse(window.localStorage.getItem('fav-recipes'))
    if (favArray === null) {
      favArray = [recipe]
      window.localStorage.setItem('fav-recipes', JSON.stringify(favArray))
    // } else if (favArray.indexOf(recipe.strID) !== -1) {
    //   console.log('present', favArray.indexOf(recipe) === -1)
    //   // favArray.splice(favArray.indexOf(recipe), 1)
    //   // window.localStorage.setItem('fav-recipes', JSON.stringify(favArray))
    } else {
      favArray.push(recipe)
      favArray = favArray.map(value => JSON.stringify(value))
      let uniqueArray = [ ...new Set(favArray) ]
      uniqueArray = uniqueArray.map(value => JSON.parse(value))
      window.localStorage.setItem('fav-recipes', JSON.stringify(uniqueArray))
    }
  }

  return (
    loading ? <p>loading</p> 
      : error ? <p>error</p> 
      :
      <Row xs="1" md="2" className="recipe-container">
        <Col className="overview">
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.strArea} {recipe.strCategory}</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <section className="buttons">
            <a href={recipe.strSource} target="_blank" rel="noopener noreferrer"><button className="btn btn-dark">View Original Recipe</button></a>
            <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer"><button className="btn btn-dark">Watch on YouTube</button></a>
            <button className="btn btn-dark" onClick={addFav}>{favoriteMessage}</button>
          </section>
        </Col>
        <Col className="steps">
          <section className="ingredients">
            <h3>Ingredients</h3>
            <div className="ingredients-list">
              <ul>
                { formatIngredients() }
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