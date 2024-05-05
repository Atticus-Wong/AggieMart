import '../styles/Register.css';
import NavBar from '../components/navbar.tsx';
import registerbg from '../assets/registerbg.jpeg';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../server/config/firebase.js';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(auth?.currentUser?.email);
    const createAccount = async(event) => {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="login-box">
            <h2>Welcome to <span className="gold-text">Aggie</span>Mart!</h2>
            <form className="sign-in-form register-sign-in-form">
                <div className="left-align">
                    
                    <input type="text" placeholder="First name" required></input>
                    <input type="text" placeholder="Last name" required></input>
                    <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}required></input>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}required></input>
                    <input type="text" placeholder="Confirm password" required></input>
                    <label id="terms-conditions"><input type="checkbox" required/>I agree to the terms and conditions</label>
                </div>
                <button id="submit" type="submit" onClick={createAccount}>Register</button>
                <hr id="register-hr"/>
                <p>Already registered? <Link to="../SignIn">Sign in</Link></p>
            </form>
            
        </div>
        
    );  
}