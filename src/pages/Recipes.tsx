import { useRecipes } from '../hooks/useRecipes'
import { Link } from 'react-router'

const Recipes = () => {
  const { recipes, loading, error } = useRecipes()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <h1>Recipe collection</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.tags.join(', ')}</p>
          <Link to={`/recipes/${recipe.id}`}>View recipe</Link>
        </div>
      ))}
    </>
  )
}

export default Recipes
