import React from 'react';
import {Link} from 'react-router-dom';
import './signup.styles.css';
const SignUp = () => {

  
    return (
        <div className='body-login'>
        <div className="container" id="container">
        <div className="form-container">
            <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="!#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="!#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="!#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start managing your expenses</p>
                    <p style={{marginBottom:0}}>Already, have an account?</p>
                    <Link to='/login'><button class="ghost" id="signIn">Sign In</button></Link>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    )
  };

  export default SignUp;