import React, { useEffect, useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa"
import "./css/login.css"
import axios from "axios";


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    
    const getAllUsers = async () => {
        const users = await axios.get("http://localhost:8080/user")
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    }


    const sendUser = async () => {
        await axios.post("http://localhost:8080/user", {
            accountType: "free",
            email: email,
            username: username,
            password: password,
            name: name,
            surname: surname
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    function handleRegister() {
        sendUser();
    }

    useEffect(() => {
        getAllUsers();
    }, [])
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
                    <button type="button" className='btn' onClick={() => handleRegister()}>Save</button>

                </form>
            </div>
        </div>
    );
}

export default Register;