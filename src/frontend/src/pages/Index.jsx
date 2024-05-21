import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa"
import "./css/login.css"
import GlobalContext from '../context/GlobalContext';

function Index() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const { currentUserId, setCurrentUserId } = useContext(GlobalContext);

    useEffect(() => {
        const getUserData = async () => {
            await axios.get("http://localhost:8080/user")
                .then((res) => {
                    const userData = res.data;
                    const userCredentials = userData.map(user => ({
                        email: user.email,
                        password: user.password
                    }));
                    setAllUsers(userCredentials);
                    console.log(allUsers);
                })
                .catch((err) => console.error(err));
        }
        getUserData();
    }, []);

    useEffect(() => {
        console.log("All Users:", allUsers);
    }, [allUsers])

    function handleSubmit() {
        const user = {
            email,
            password
        }
        let userFound = false;
        allUsers.forEach(element => {
            if (JSON.stringify(user) === JSON.stringify(element)) {
                userFound = true;
            }
        });
        if (userFound) {
            console.log("pass");
            //Login isteği yolla
        }
        else {
            console.log("fail");
            //Hatalı olan inputu göster düzelttir.
        }
    }

    return (
        <div className='bodyy'>
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} /><FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} /><FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="button" onClick={handleSubmit}>Login</button>

                    <div className="register-link">
                        <p>Hâla bir hesabın yok mu? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Index;