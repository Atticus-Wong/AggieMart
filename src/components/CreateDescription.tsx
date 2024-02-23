import "../styles/CreateDescription.css";

export default function CreateDescription() {

    return (
        <div className="createDesc">
            <h1 id="contact">Contact Information</h1>
            <div className="inputs">
                <input className ="inputBox" id="price" type="number" placeholder="Price ($)"></input>
                <input className ="inputBox" id="location" type="text" placeholder="Location"></input>
                <input className ="inputBox" id="phoneNumber" type="text" placeholder="Phone Number"></input>
                <input className ="inputBox" id="email" type="text" placeholder="Email"></input>
            </div>

            <textarea className="descBox" id="description" type="text" placeholder="Description"></textarea>

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
            
        </div>
    )
};