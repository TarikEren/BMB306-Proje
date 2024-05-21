import React from 'react';
import Navbar from '../components/Navbar';
import { FaUser,FaLock } from "react-icons/fa"
import  "./css/login.css"

function Register() {
  return (
    <div className='bodyy'>
      <div className="wrapper">
            <form action="">
              <h1>Register</h1>
              <div className="input-box">
                <input type="text" placeholder='Username' required /><FaUser className='icon'/>
              </div>
              <div className='person'>
              <div className="input-box">
                <input type="text" placeholder='Name' required />
              </div>
              <div className="input-box">
                <input type="text" placeholder='Surname' required />
              </div>
              </div>
              <div className="input-box">
                <input type="password" placeholder='Password' required /><FaLock className='icon'/>
              </div>
              <div className="input-box">
                <input type="password" placeholder='Re-enter Password' required /><FaLock className='icon'/>
              </div>
              <button type="submit"className='btn'>Save</button>

            </form>
          </div>
          </div>
  );
}

export default Register;