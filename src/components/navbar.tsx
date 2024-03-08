import { Link } from "react-router-dom"
import LeftMenu from "./left_menu"
export default function Navbar() {
  return (
    <>      
      <LeftMenu />
      <nav className="nav">
      
        <Link to="../Home" className="site-title">Tom Nook's Emporium</Link>
      <ul>
        <li>
          <Link to="../Register" className="navbar-links navbar-register">Register</Link>
        </li>
        <li>
          <Link to="../SignIn" className="navbar-links navbar-login">Login</Link>
        </li>
      </ul>
      </nav>
    </>
  )
}