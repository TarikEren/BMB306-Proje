import React from 'react';
import Navbar from '../components/Navbar';
import { FaUser } from "react-icons/fa"
import  "./css/login.css"

function Index() {
  return (
      <div className="wrapper">
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser />
              </div>
              <div className="input-box">
                <input type="password" placeholder='Password' required />
              </div>

              <div className='remember-forgot'>
                <label><input type="checkbox"/>RememberMe</label>
                <a href="#">Forgot Password</a>
              </div>
              <button type='submit'>Login</button>
              
              <div className="register-link">
                <p>Hala bir hesabın yok mu? <a href="#">Register</a></p>
              </div>
            </form>
          </div>
  );
}

export default Index;