import { useState } from 'react'
import type { Recipe } from '../types/Recipe'
import { API_URL, API_HANDLE } from '../config/api'

export const useUpdateRecipe = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateRecipe = async (id: string, updates: Partial<Recipe>) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/${API_HANDLE}/items/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error('Failed to update recipe')
      }

      const updatedRecipe: Recipe = await response.json()
      return updatedRecipe
    } catch (error) {
      console.error(error)
      setError('Could not update recipe. Please try again later.')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { updateRecipe, loading, error }
}
