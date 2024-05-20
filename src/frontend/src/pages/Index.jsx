import React from 'react';
import Navbar from '../components/Navbar';
import { FaUser,FaLock } from "react-icons/fa"
import  "./css/login.css"

function Index() {
  return ( <div className='bodyy'>
      <div className="wrapper">
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder='Username' required /><FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input type="password" placeholder='Password' required /><FaLock className='icon'/>
              </div>

              <div className='remember-forgot'>
                <label><input type="checkbox"/>Remember Me</label>
                <a href="#">Forgot Password</a>
              </div>
              <button type="submit">Login</button>
              
              <div className="register-link">
                <p>Hala bir hesabın yok mu? <a href="#">Register</a></p>
              </div>
            </form>
          </div>
          </div>
  );
}

export default Index;