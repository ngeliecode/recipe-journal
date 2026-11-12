import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
      <Link to="/" aria-label="Go to homepage">
        Recipe Journal
      </Link>
    </header>
  )
}

export default Header
