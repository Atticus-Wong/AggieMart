import '../styles/SignIn.css';
import NavBar from '../components/navbar.tsx';
import signinbg from '../assets/signin-bg.jpg';
import cutecow from '../assets/cutecow.jpg';
import {Link} from 'react-router-dom';



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

    return(
        <div className="login-box">
            <h2>Sign In to <span className="gold-text">Aggie</span>Mart</h2>
            <form className="sign-in-form">
                <div className="left-align">
                    <input className="email" type="email" placeholder="Email Address" required/>
                    <input className="password" type="text" placeholder="Password" required/>
                    <a id="forgot-password" href="https://www.google.com">Forgot Password?</a>
                </div>
                    <button id="submit" type="submit">Sign In</button>
            </form>

            <hr/>
            <p>Don't have an account? <Link to="../Register">Register</Link></p>
            <img id="cutecow" src={cutecow} alt="cute cow"></img>
        </div>
    );
}