import { useEffect, useState } from 'react'
import type { Recipe } from '../types/Recipe'
import { API_URL, API_HANDLE } from '../config/api'

export const useRecipe = (id: string) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipeById = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`${API_URL}/${API_HANDLE}/items/${id}`)
        if (!response.ok) {
          throw new Error('Failed to load recipe')
        }

        const data: Recipe = await response.json()
        setRecipe(data)
      } catch (error) {
        console.error(error)
        setError('Could not load recipe. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipeById()
  }, [id])

  return { recipe, setRecipe, loading, error }
}
