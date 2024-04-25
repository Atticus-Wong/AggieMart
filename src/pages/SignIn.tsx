import '../styles/SignIn.css';
import NavBar from '../components/navbar.tsx';
import menulogo from '../assets/menulogo.png';
import signinbg from '../assets/signin-bg.jpg';


export default function SignIn() {
    const [isLogIn, setIsLogIn] = useState(0);


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
            <h2>Sign In to <span>Aggie</span>Mart</h2>
            <form className="sign-in-form">
                <div class="left-align">
                    <input class="email" type="email" placeholder="Email Address" required/>
                    <input class="password" type="text" placeholder="Password" required/>
                    <a id="forgot-password" href="https://www.google.com">Forgot Password?</a>
                </div>
                    <button id="submit" type="submit">Sign In</button>
            </form>

            <hr/>
            <p>Don't have an account? <a href="https://www.google.com">Register</a></p>
        </div>
    );
}