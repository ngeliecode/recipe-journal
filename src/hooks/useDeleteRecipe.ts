import { useState } from 'react'
import { API_URL, API_HANDLE } from '../config/api'

export const useDeleteRecipe = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const deleteRecipe = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/${API_HANDLE}/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to delete recipe')
      }

      return true
    } catch (error) {
      console.error(error)
      setError('Could not delete recipe. Please try again later.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { deleteRecipe, loading, error }
}
