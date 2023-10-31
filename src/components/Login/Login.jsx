import React, {useState} from 'react'
import './LoginStyles.css'


const Login = () => {

  const [isSignInActive, setIsSignInActive] = useState(true);

  const toggleForm = () => {
    setIsSignInActive(!isSignInActive);
  };
  
  return (
    <div className="container">
        <div className={`form ${isSignInActive ? 'sign-in-form' : 'sign-up-form active'}`}>
            <div className="wrapper">
                <form action="">
                    <h1>S{}</h1>
                    <span>or use your account</span>
                    <div className="input-field">
                      <input type="email" placeholder='Email' />
                    </div>
                    <div className="input-field">
                      <input type="password" placeholder='Password' />
                    </div>
                    <a class="frgt" href="#" >Forgot  your  Password ?</a>
                    <div class="btn">
                        <button type="submit">SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="form sign-up-form active">
          <div className="wrapper">
            <form action="">
              <h1>Create Account</h1>
              <span>or use email for registration</span>
              <div className="input-feild">
                <input type="name" placeholder='Name'/>
              </div>
              <div className="input-feild">
                <input type="email" placeholder='Email'/>
              </div>
              <div className="input-feild">
                <input type="password" placeholder='Password'/>
              </div>
              <div className="btn">
                <button type='submit'>SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info.</p>
              <button id='signInButton'>SIGN IN</button>
            </div>
            <div className="overlay-right">
              <h1>Hello Friend!</h1>
              <p>Enter you personal details and start journey with us</p>
              <button id='signInButton'>SIGN UP</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Login