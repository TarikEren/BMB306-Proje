import React, { useContext, useEffect, useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import "./css/login.css"
import GlobalContext from '../context/GlobalContext';


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    let navigate = useNavigate();
    let allUsers = JSON.parse(localStorage.getItem("accounts"));
    let allEmails = allUsers.map(user => ({
        email: user.email
    }));

    const handleSubmit = () => {
        const newUser = {
            username: username,
            password: password,
            email: email,
            name: name,
            surname: surname,
            accountType: "free"
        }
        let userFound = false;
        allEmails.forEach(element => {
            if (email === element.email) {
                userFound = true;
            }
        });
        if (userFound) {
            console.log("fail");
        } 
        else {
            allUsers.push(newUser);
            localStorage.setItem("accounts", JSON.stringify(allUsers));
            console.log(localStorage);
            navigate("/");
        }
    };

    return (
        <div className='bodyy bg-gradient-to-r from-teal-300 to-blue-400'>
            <div className="wrapper">
                <form action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} /><FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} /><FaUser className='icon' />
                    </div>
                    <div className='person'>
                        <div className="input-box">
                            <input type="text" placeholder='Name' required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Surname' required onChange={(e) => setSurname(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} /><FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Re-enter Password' required onChange={(e) => setConfirmPassword(e.target.value)} /><FaLock className='icon' />
                    </div>
                    <button type="button" className='btn' onClick={handleSubmit}>Save</button>

                </form>
            </div>
        </div>
    );
}

export default Register;