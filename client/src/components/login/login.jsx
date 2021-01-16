import React from 'react';
import {Link} from 'react-router-dom';
import './login.styles.css';


const Login = () => {

  
    return (
        <div className='body-login'>
        <div class="container" id="container">
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#!" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#!" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#!" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
                <a href="#!">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>To manage your expenses, please login back </p>
                    <p style={{marginBottom:0}}>Not a member? Create a new account</p>
                    <Link to='/signup'><button class="ghost" id="signIn">Sign Up</button></Link>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    
   )
  };

  export default Login;