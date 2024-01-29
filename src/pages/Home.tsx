import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />
      <h2>Home page</h2>
      <li><Link to="../MakePost">MakePost</Link></li>
      <li><Link to="../ViewPost">ViewPost</Link></li>
    </>
  )
}
