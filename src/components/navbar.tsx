import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="../Home" className="site-title">Name of our project</Link>
    <ul>
      <li>
        <Link to="../Register" className="navbar-links navbar-register">Register</Link>
      </li>
      <li>
        <Link to="../SignIn" className="navbar-links navbar-login">Login</Link>
      </li>
    </ul>
    </nav>
  )
}