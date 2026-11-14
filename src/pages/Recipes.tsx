import { Link } from 'react-router'
import { useRecipes } from '../hooks/useRecipes'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useLocalStorage(
    'recipe-filter',
    'All',
  )

  const { recipes, loading, error } = useRecipes()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!recipes.length) return <p>No recipes found</p>

  const filters = ['All', 'Want to make', 'Favourites', 'Archived', 'Made']

  const filteredRecipes = recipes.filter((recipe) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Favourites') return recipe.category === 'Favorite'
    if (activeFilter === 'Archived') return recipe.category === 'Archived'

    return recipe.status === activeFilter
  })

  return (
    <>
      <h1>Recipe collection</h1>

      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.tags?.join(', ')}</p>
          <Link to={`/recipes/${recipe.id}`}>View recipe</Link>
        </div>
      ))}
    </>
  )
}

export default Recipes
