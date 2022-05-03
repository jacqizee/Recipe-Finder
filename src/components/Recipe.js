import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
    <div className='recipe'>
      {loading ? <p>loading</p> 
        : error ? <p>error</p> 
        : <section className="recipe-container">
          <header>
            <h1>{recipe.strMeal}</h1>
            <p>About text</p>
          </header>
          <section className="middle"></section>
            <div className="image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
            <div className="recipe-text">
              <div className="ingredients">
                <h3>Ingredients</h3>
                <div className="ingredients-part-1">
                  <ul>
                    <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                    <li>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                    <li>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                    <li>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                    <li>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                    <li>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                    <li>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                    <li>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                    <li>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                    <li>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                  </ul>
                </div>
                <div className="ingredients-part-2">
                  <ul>
                    <li>{recipe.strMeasure11} {recipe.strIngredient11}</li>
                    <li>{recipe.strMeasure12} {recipe.strIngredient12}</li>
                    <li>{recipe.strMeasure13} {recipe.strIngredient13}</li>
                    <li>{recipe.strMeasure14} {recipe.strIngredient14}</li>
                    <li>{recipe.strMeasure15} {recipe.strIngredient15}</li>
                    <li>{recipe.strMeasure16} {recipe.strIngredient16}</li>
                    <li>{recipe.strMeasure17} {recipe.strIngredient17}</li>
                    <li>{recipe.strMeasure18} {recipe.strIngredient18}</li>
                    <li>{recipe.strMeasure19} {recipe.strIngredient19}</li>
                    <li>{recipe.strMeasure20} {recipe.strIngredient20}</li>
                  </ul>
                </div>
              </div>
              <div className="how-to">
                <h3>How To</h3>
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
          <section className="bottom"></section>
          </section>}
    </div>
  )
}

export default Recipe