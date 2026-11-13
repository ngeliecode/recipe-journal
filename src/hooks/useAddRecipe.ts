import { useState } from 'react'
import type { Recipe } from '../types/Recipe'
import { API_URL, API_HANDLE } from '../config/api'

export const useAddRecipe = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addRecipe = async (recipe: Pick<Recipe, 'title'>) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${API_URL}/${API_HANDLE}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      })

      if (!response.ok) {
        throw new Error('Failed to add recipe')
      }

      const newRecipe: Recipe = await response.json()
      return newRecipe
    } catch (error) {
      console.error(error)
      setError('Could not add recipe. Please try again later.')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { addRecipe, loading, error }
}
