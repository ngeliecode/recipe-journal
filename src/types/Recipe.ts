export type Recipe = {
  id: string
  title: string
  status: 'Want to make' | 'Made' | 'Archived'
  imageUrl?: string
  notes?: string
  tags?: string[]
  createdAt: string
  updatedAt: string
}
