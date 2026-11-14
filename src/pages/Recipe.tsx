import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useRecipe } from '../hooks/useRecipe'
import { useUpdateRecipe } from '../hooks/useUpdateRecipe'
import { useDeleteRecipe } from '../hooks/useDeleteRecipe'
import StatusSelector from '../components/StatusSelector'
import RecipeActions from '../components/RecipeActions'

const Recipe = () => {
  const { id } = useParams()
  const { recipe, setRecipe, loading, error } = useRecipe(id)
  const {
    updateRecipe,
    loading: updating,
    error: updateError,
  } = useUpdateRecipe()

  const [newTitle, setNewTitle] = useState('')

  const navigate = useNavigate()
  const { deleteRecipe } = useDeleteRecipe()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!recipe) return <p>Recipe not found</p>

  const handleDelete = async () => {
    if (!id) return

    const deleted = await deleteRecipe(id)

    if (deleted) {
      navigate('/recipes')
    }
  }

  // handle update title
  const handleUpdate = async () => {
    if (!id || !newTitle.trim()) return

    const updatedRecipe = await updateRecipe(id, {
      title: newTitle.trim(),
    })

    if (updatedRecipe) {
      setNewTitle(updatedRecipe.title)
    }
  }

  const handleCategoryChange = async (
    category: 'Favorite' | 'Archived' | '',
  ) => {
    if (!id) return

    const updatedRecipe = await updateRecipe(id, {
      category: category,
    })

    if (updatedRecipe) {
      setRecipe(updatedRecipe)
    }
  }

  return (
    <>
      <h1>{newTitle || recipe.title}</h1>
      <p>Category: {recipe.category}</p>
      <label htmlFor="newTitle">New recipe name</label>
      <input
        type="text"
        id="newTitle"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Enter new recipe name"
      />
      <button onClick={handleUpdate} disabled={updating}>
        Update recipe
      </button>

      <StatusSelector
        status={recipe.status}
        onChange={(status) => {
          if (!id) return
          updateRecipe(id, { status })
        }}
      />

      <RecipeActions
        category={recipe.category}
        onCategoryChange={handleCategoryChange}
        onDelete={handleDelete}
      />

      {updateError && <p>{updateError}</p>}
    </>
  )
}

export default Recipe
