import "../styles/CreateDescription.css";
import { useState } from "react";

import { ItemData } from "./itemData";

const CreateDescription: React.FC= ()  => {
    const [inputValuePrice, setInputValuePrice] = useState<string>('');

    const handleInputChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValuePrice(event.target.value);
    }
    const [inputValueLocation, setInputValueLocation] = useState<string>('');

    const handleInputChangeLocation= (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueLocation(event.target.value);
    }
    const [inputValuePhone, setInputValuePhone] = useState<string>('');

    const handleInputChangePhone= (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValuePhone(event.target.value);
    }
    const [inputValueEmail, setInputValueEmail] = useState<string>('');

    const handleInputChangeEmail= (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueEmail(event.target.value);
    }

    const [inputValueDesc, setInputValueDesc] = useState<string>('');

    const handleInputChangeDesc= (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValueDesc(event.target.value);
    }

    const makeListing: React.MouseEventHandler<HTMLDivElement> = () => {
        console.log(ItemData);
        ItemData.push(
          {
            price: inputValuePrice,
            itemName: "test",
            location: inputValueLocation,
            previewImage: "test",
            description: inputValueDesc,
            email: inputValueEmail,
            phoneNumber: inputValuePhone
          }
        );
    }
    return (
        <div className="createDesc">
            <h1 id="contact">Contact Information</h1>
            <div className="inputs">
                <input className ="inputBox" id="price" type="number" placeholder="Price ($)" onChange={handleInputChangePrice}></input>
                <input className ="inputBox" id="location" type="text" placeholder="Location" onChange={handleInputChangeLocation}></input>
                <input className ="inputBox" id="phoneNumber" type="text" placeholder="Phone Number" onChange={handleInputChangePhone}></input>
                <input className ="inputBox" id="email" type="text" placeholder="Email" onChange={handleInputChangeEmail}></input>
            </div>

            <textarea className="descBox" id="description" placeholder="Description" onChange={handleInputChangeDesc}></textarea>

            <h1 id="tagtext">Tags</h1>

            <div className="tag_group_row1">
                <div className="tag">
                    <p id="tag_name">School</p>
                </div>

                <div className="tag">
                    <p id="tag_name">Home</p>
                </div>

                <div className="tag">
                    <p id="tag_name">Apparel</p>
                </div>

                <div className="tag">
                    <p id="tag_name">Cosmetics</p>
                </div>
            </div>
            <div className="tag_group_row2">
                <div className="tag">
                    <p id="tag_name">Misc</p>
                </div>

                <div className="tag">
                    <p id="tag_name">Tech</p>
                </div>
            </div>
            <div className="list-button" onClick={makeListing}>
                Create Listing
            </div>     
        </div>
    )
};

export default CreateDescription;