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
