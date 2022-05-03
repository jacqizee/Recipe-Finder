import React, { useEffect } from 'react'
import axios from 'axios'

export const generateRandom = () => {
    const getRandom = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        return data.meals[0].idMeal
      } catch (error) {
        console.log(error)
      }
    }
    getRandom()
}