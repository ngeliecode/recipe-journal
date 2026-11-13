import { useParams } from 'react-router'
import { useRecipe } from '../hooks/useRecipe'

const Recipe = () => {
  const { id } = useParams()
  const { recipe, loading, error } = useRecipe(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!recipe) return <p>Recipe not found</p>

  return <h1>{recipe.title}</h1>
}

export default Recipe
