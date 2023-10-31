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



// const signInButton = document.querySelector('#signInButton');
// const signUpButton = document.querySelector('#signUpButton');
// const overlayContainer = document.querySelector('.container .overlay-container');
// const overlay = document.querySelector('.container .overlay-container .overlay');
// const signInform = document.querySelector('.container .sign-in-form');
// const signUpform = document.querySelector('.container .sign-up-form');

// signInButton.addEventListener('click', () => {
//     overlayContainer.style.transform = 'translateX(100%)';
//     overlay.style.transform = 'translateX(-50%)';
//     signInform.classList.add('active');
//     signUpform.classList.remove('active');
// });
// signUpButton.addEventListener('click', () => {
//     overlayContainer.style.transform = 'translateX(0)';
//     overlay.style.transform = 'translateX(0)';
//     signUpform.classList.add('active');
//     signInform.classList.remove('active');
// })


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
//     <title>SignIn SignOut Page</title>
// </head>
// <body>
//         <div class="container">
//         <div class="form sign-in-form">
//             <div class="wrapper">
//                 <form action="">
//                     <h1>Sign In</h1>
//                     <div class="social-media">
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-facebook'></i>
//                         </a>
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-linkedin'></i>
//                         </a>
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-google' ></i>
//                         </a>
//                     </div>
//                     <span>or use your account</span>
//                     <div class="input-field">
//                         <input type="email" placeholder="Email">
//                     </div>
//                     <div class="input-field">
//                         <input type="password" placeholder="Password">
//                     </div>
//                     <a class="frgt" href="#" >Forgot  your  Password ?</a>
//                     <div class="btn">
//                         <button type="submit">SIGN IN</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
        
//         <div class="form sign-up-form active">
//             <div class="wrapper">
//                 <form action="">
//                     <h1>Create Account</h1>
//                     <div class="social-media">
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-facebook'></i>
//                         </a>
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-linkedin'></i>
//                         </a>
//                         <a href="#" class="social-icon">
//                             <i class='bx bxl-google' ></i>
//                         </a>
//                     </div>
//                     <span>or use your email for registration</span>
//                     <div class="input-field">
//                         <input type="name" placeholder="Name">
//                     </div>
//                     <div class="input-field">
//                         <input type="email" placeholder="Email">
//                     </div>
//                     <div class="input-field">
//                         <input type="password" placeholder="Password">
//                     </div>
//                     <div class="btn">
//                         <button type="submit">SIGN UP</button>
//                     </div>
//                 </form>
//             </div>
            
//         </div>

//         <div class="overlay-container">
//             <div class="overlay">
//                 <div class="overlay-left">
//                     <h1>Welcome Back!</h1>
//                     <p>To keep connected with us please login with your personal info.</p>
//                     <button id="signInButton">SIGN IN</button>
//                 </div>
//                 <div class="overlay-right">
//                     <h1>Hello Friend!</h1>
//                     <p>Enter you personal details and start journey with us</p>
//                     <button id="signUpButton">SIGN UP</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// <script src="main.js"></script>
// </body>
// </html>

