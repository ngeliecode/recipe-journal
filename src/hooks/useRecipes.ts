import { useEffect, useState } from 'react'
import type { Recipe } from '../types/Recipe'
import { API_URL, API_HANDLE } from '../config/api'

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/${API_HANDLE}/items`)
        if (!response.ok) {
          throw new Error('Failed to load recipes')
        }

        const data: Recipe[] = await response.json()
        setRecipes(data)
      } catch (error) {
        console.error(error)
        setError('Could not load recipes. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  return { recipes, setRecipes, loading, error }
}
