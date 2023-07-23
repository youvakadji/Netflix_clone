import React, { useState } from 'react';
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="loginSccreen_background">
        <img 
            className="loginScreen_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="loginScreen_logo" 
        />
        <button className='loginScreen_button' onClick={() => setSignIn(true)}>
            Sign In
        </button>

        <div className='loginScreen_gradient' />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
            <SignupScreen />
        ) : (
            <>
            <h1>
                Unlimited films, TV programmes and more. 
            </h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch?Enter your email to create or restart your membersip.
            </h3>

            <div className="loginScreen_input">
                <form>
                    <input type="email" placeholder='Email Adress' />
                    <button className='loginScreen_getStarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                </form>
            </div>
        </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen
