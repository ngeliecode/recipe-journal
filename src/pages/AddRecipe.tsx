import { useNavigate } from 'react-router'
import { useAddRecipe } from '../hooks/useAddRecipe'
import RecipeForm from '../components/RecipeForm'

const AddRecipe = () => {
  const { addRecipe, loading, error } = useAddRecipe()
  const navigate = useNavigate()

  const handleSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>,
    formData: { title: string; status: 'Want to make' | 'Made' },
  ) => {
    event.preventDefault()

    const newRecipe = await addRecipe(formData)

    if (newRecipe) {
      navigate(`/recipes/${newRecipe.id}`)
    }
  }

  return (
    <>
      <h1>Add recipe</h1>

      <RecipeForm onSubmit={handleSubmit} loading={loading} />

      {loading && <p>Saving recipe...</p>}
      {error && <p>{error}</p>}
    </>
  )
}

export default AddRecipe
