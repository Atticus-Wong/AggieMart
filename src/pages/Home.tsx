import Navbar from "../components/navbar";
import Item from "../components/item";
import Banner from "../components/banner";
import '../styles/Home.css'
import '../components/createButton'
import ListingButton from "../components/createButton";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="main-container">
        <Item />
        <ListingButton />
      </div>
    </>
  )
}
