type RecipeActionsProps = {
  category: 'Favorite' | 'Archived' | ''
  onCategoryChange: (category: 'Favorite' | 'Archived' | '') => void
  onDelete: () => void
}

const RecipeActions = ({
  category,
  onCategoryChange,
  onDelete,
}: RecipeActionsProps) => {
  return (
    <div>
      <button
        onClick={() =>
          onCategoryChange(category === 'Favorite' ? '' : 'Favorite')
        }
        className={category === 'Favorite' ? 'active' : ''}
      >
        Favorite
      </button>

      <button
        onClick={() =>
          onCategoryChange(category === 'Archived' ? '' : 'Archived')
        }
        className={category === 'Archived' ? 'active' : ''}
      >
        Archived
      </button>

      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
export default RecipeActions
