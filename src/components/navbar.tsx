import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Name of our project</a>
    <ul>
      <li>
        <Link to="*" className="navbar-links navbar-register">Register</Link>
      </li>
      <li>
        <Link to="*" className="navbar-links navbar-login">Login</Link>
      </li>
    </ul>
    </nav>
  )
}