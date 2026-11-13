import { useParams } from 'react-router'
import { useRecipe } from '../hooks/useRecipe'
import { useUpdateRecipe } from '../hooks/useUpdateRecipe'
import { useState } from 'react'

const Recipe = () => {
  const { id } = useParams()
  const { recipe, loading, error } = useRecipe(id)
  const {
    updateRecipe,
    loading: updating,
    error: updateError,
  } = useUpdateRecipe()

  const [newTitle, setNewTitle] = useState('')

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!recipe) return <p>Recipe not found</p>

  const handleUpdate = async () => {
    if (!id || !newTitle.trim()) return

    const updatedRecipe = await updateRecipe(id, {
      title: newTitle.trim(),
    })

    if (updatedRecipe) {
      setNewTitle(updatedRecipe.title)
    }
  }

  return (
    <>
      <h1>{newTitle || recipe.title}</h1>

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

      {updating && <p>Updating recipe...</p>}
      {updateError && <p>{updateError}</p>}
    </>
  )
}

export default Recipe
