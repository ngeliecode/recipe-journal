import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAddRecipe } from '../hooks/useAddRecipe'

const AddRecipe = () => {
  const { addRecipe, loading, error } = useAddRecipe()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newRecipe = await addRecipe(formData)
    if (newRecipe) {
      navigate(`/recipes/${newRecipe.id}`)
    }
  }

  return (
    <>
      <h1>Add recipe</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe name</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Creamy Carbonara"
          required
        />

        <button type="submit" disabled={loading}>
          Add Recipe
        </button>
      </form>

      {loading && <p>Saving recipe...</p>}
      {error && <p>{error}</p>}
    </>
  )
}

export default AddRecipe
