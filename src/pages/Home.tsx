import Navbar from "../components/navbar";
import Item from "../components/item";
import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <h2>Home page</h2>
      <div className="main-container">
        <Item />
      </div>
    </>
  )
}
