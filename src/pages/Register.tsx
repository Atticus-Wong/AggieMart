import '../styles/Register.css';
import NavBar from '../components/navbar.tsx';
import registerbg from '../assets/registerbg.jpeg';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <img className="signinbg" src={registerbg}></img>

            <NavBar/>   
            <div className="main-container">
                <RegisterBox/>
            </div>

        </div>
    );
}    

export function RegisterBox() {
    return (
        <div className="login-box">
            <h2>Welcome to <span className="gold-text">Aggie</span>Mart!</h2>
            <form className="sign-in-form register-sign-in-form">
                <div className="left-align">
                    
                    <input type="text" placeholder="First name" required></input>
                    <input type="text" placeholder="Last name" required></input>
                    <input type="email" placeholder="Email address" required></input>
                    <input type="text" placeholder="Password" required></input>
                    <input type="text" placeholder="Confirm password" required></input>
                    <label id="terms-conditions"><input type="checkbox" required/>I agree to the terms and conditions</label>
                </div>
                <button id="submit" type="submit">Register</button>
                <hr id="register-hr"/>
                <p>Already registered? <Link to="../SignIn">Sign in</Link></p>
            </form>
            
        </div>
        
    );  
}