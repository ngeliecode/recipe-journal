import { useRecipes } from '../hooks/useRecipes'
import { useDeleteRecipe } from '../hooks/useDeleteRecipe'
import { Link } from 'react-router'

const Recipes = () => {
  const { recipes, setRecipes, loading, error } = useRecipes()
  const {
    deleteRecipe,
    loading: deleting,
    error: deleteError,
  } = useDeleteRecipe()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!recipes.length) return <p>No recipes found</p>

  const handleDelete = async (id: string) => {
    const deleted = await deleteRecipe(id)

    if (deleted) {
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id),
      )
    }
  }

  return (
    <>
      <h1>Recipe collection</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.tags?.join(', ')}</p>
          <Link to={`/recipes/${recipe.id}`}>View recipe</Link>
          <button onClick={() => handleDelete(recipe.id)} disabled={deleting}>
            Delete
          </button>
        </div>
      ))}

      {deleteError && <p>{deleteError}</p>}
    </>
  )
}

export default Recipes
