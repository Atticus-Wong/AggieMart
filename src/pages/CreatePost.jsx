import NavBar from '../components/navbar.tsx';
import '../styles/CreatePost.css'

export default function CreatePost() {
    return(
        <div>
            <NavBar></NavBar>
            <div className="createpost-container">
                <div className="createpost-prompt-box">
                    <NameDescForm/>
                </div>
            </div>
        </div>
    );
}

export function NameDescForm() {

    const nameDescFormSubmit = (event) => {
        event.preventDefault();
        alert("You have submitted the name desc form")
    }

    return(
        <form id="createpost-name-desc-form" onSubmit={nameDescFormSubmit}>
            <h1>Ready to start selling?</h1>
            <h2>Give us a name for your item</h2>
            <input id="createpost-name-input" type="text" placeholder="Product name"/>
            <h2> Describe your item </h2>
            <p> Tell other students about its awesomeness!</p>
            <textarea id="createpost-desc-input"></textarea>
            <div id="name-desc-submit-container">
                <button id="name-desc-submit" type="submit">Next</button>
            </div>
        </form>
       
    );
}