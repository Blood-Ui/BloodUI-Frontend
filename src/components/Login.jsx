import { useState } from 'react';
import '../Styles/LoginStyles.css';
import 'boxicons/css/boxicons.min.css';

const SignInSignUp = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  return (
    <div className="container">
      <div className={`form sign-in-form ${isSignInActive ? 'active' : ''}`}>
        <div className="wrapper">
          <form action="">
            <h1>Sign In</h1>
            {/* <div className="social-media">
              <a href="#" className="social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bx bxl-google"></i>
              </a>
            </div> */}
            <span>or use your account</span>
            <div className="input-field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" />
            </div>
            <a className="frgt" href="#">
              Forgot your Password?
            </a>
            <div className="btn">
              <button type="submit">SIGN IN</button>
            </div>
          </form>
        </div>
      </div>

      <div className={`form sign-up-form ${!isSignInActive ? 'active' : ''}`}>
        <div className="wrapper">
          <form action="">
            <h1>Create Account</h1>
            {/* <div className="social-media">
              <a href="#" className="social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bx bxl-google"></i>
              </a>
            </div> */}
            <span>or use your email for registration</span>
            <div className="input-field">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" />
            </div>
            <div className="btn">
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>

      <div className="overlay-container" style={{ transform: isSignInActive ? 'translateX(100%)' : 'translateX(0)' }}>
        <div className="overlay" style={{ transform: isSignInActive ? 'translateX(-50%)' : 'translateX(0)' }}>
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info.</p>
            <button id="signInButton" onClick={handleSignInClick}>SIGN IN</button>
          </div>
          <div className="overlay-right">
            <h1>Hello Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button id="signUpButton" onClick={handleSignUpClick}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
