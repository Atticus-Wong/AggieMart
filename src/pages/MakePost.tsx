import Navbar from "../components/navbar";
import CreateDescription from "../components/CreateDescription";
import ImageUpload from "../components/imgupload";
import '../styles/imgupload.css'
export default function MakePost() {
  return (
    <> 
      <Navbar />
      <div className="makePost-wrapper">
        <CreateDescription/>
        <ImageUpload />
      </div>
    </>
  )
}