import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <h1>Good food, worth remembering.</h1>
      <p>Build a personal collection of recipes you love.</p>
      <Link to="/recipes">Recipe collection</Link>
      <Link to="/recipes/add">Add a recipe</Link>
    </>
  )
}

export default Home
