import '../styles/SignIn.css';
import NavBar from '../components/navbar.tsx';
import signinbg from '../assets/signin-bg.jpg';
import cutecow from '../assets/cutecow.jpg';
import googlelogo from '../assets/google-logo.jpg';
import {Link} from 'react-router-dom';
import { auth, googleProvider } from '../../server/config/firebase';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';


export default function SignIn() {

    return (
        <div>
            <img className="signinbg" src={signinbg}></img>

            <NavBar/>
            <div className="main-container">
                <LogIn/>
            </div>

        </div>
    );
}

export function LogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signin = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } 
        catch (err) {
            console.error(err);
        }
    }
    const signInWithGoogle = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithPopup(auth, googleProvider);
            console.log(user);
        } catch (err) {
            console.error(err);
        }
    }
    const logout = async (event) => {
        event.preventDefault();
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <div className="login-box">
            <h2>Sign In to <span className="gold-text">Aggie</span>Mart</h2>
            <form className="sign-in-form">
                <div className="left-align">
                    <input className="email" type="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)} } />
                    <input className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    {/* <button onClick={signInWithGoogle}>Sign in with google</button> */}
                    <a id="forgot-password" href="https://www.google.com">Forgot Password?</a>
                </div>
                    <button id="submit" type="submit" onClick={signin}>Sign In</button>
                    <button onClick={logout}>Logout(temp)</button>
            </form>

            <hr/>
            <p>Don't have an account? <Link to="../Register">Register</Link></p>
            <p>OR</p>

            <button id="sign-in-with-google-button" onClick={signInWithGoogle}>
                <img src={googlelogo}></img>
                <p>Sign in with Google</p>
            </button>


            <img id="cutecow" src={cutecow} alt="cute cow"></img>
        </div>
    );
}