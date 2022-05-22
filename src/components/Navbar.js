import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Asked.com</h1>
        </Link>
        <Link to="/create">Ask something</Link>
      </nav>
    </div>
  )
}