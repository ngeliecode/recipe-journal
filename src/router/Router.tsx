import { Route, Routes } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import AddRecipe from '../pages/AddRecipe'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Recipe from '../pages/Recipe'
import Recipes from '../pages/Recipes'

const Router = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/add" element={<AddRecipe />} />
      <Route path="/recipes/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default Router
