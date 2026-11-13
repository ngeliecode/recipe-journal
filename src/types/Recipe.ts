export type Recipe = {
  id: string
  title: string
  subtitle?: string
  category: 'Favorite' | 'Archived' | ''
  status: 'Want to make' | 'Made'
  imageUrl?: string
  notes?: string
  tags?: string[]
  createdAt: string
  updatedAt: string
}
