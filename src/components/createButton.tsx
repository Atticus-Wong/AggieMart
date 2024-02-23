import { ItemData } from "./itemData"
import { useState } from "react";
import '../styles/createButton.css'



export default function ListingButton() {
  const makeListing: React.MouseEventHandler<HTMLDivElement> = () => {
      console.log(ItemData);
      ItemData.push(
        {
          price: "price",
          itemName: "test",
          location: "test",
          previewImage: "test",
          description: "test"
        }
      );
  }
  return (
    <>
    <div className="list-button" onClick={makeListing}>
      Create Listing
    </div>     
    </>
  )
}