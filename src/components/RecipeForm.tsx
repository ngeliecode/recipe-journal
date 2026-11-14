import { useState } from 'react'
import StatusSelector from './StatusSelector'

type RecipeFormProps = {
  onSubmit: (
    e: React.SubmitEvent<HTMLFormElement>,
    formData: { title: string; status: 'Want to make' | 'Made' },
  ) => void
  loading: boolean
}

const RecipeForm = ({ onSubmit, loading }: RecipeFormProps) => {
  const [formData, setFormData] = useState<{
    title: string
    status: 'Want to make' | 'Made'
  }>({
    title: '',
    status: 'Want to make',
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

  return (
    <form onSubmit={(e) => onSubmit(e, formData)}>
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

      <StatusSelector
        status={formData.status}
        onChange={(status) => setFormData((prev) => ({ ...prev, status }))}
      />

      <button type="submit" disabled={loading}>
        Add Recipe
      </button>
    </form>
  )
}

export default RecipeForm
