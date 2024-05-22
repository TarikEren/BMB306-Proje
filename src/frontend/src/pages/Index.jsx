import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { redirect } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"
import "./css/login.css"
import GlobalContext from '../context/GlobalContext';

function Index() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [allUserIds, setAllUserIds] = useState([]);
    const { currentUserId, setCurrentUserId } = useContext(GlobalContext);

    useEffect(() => {
        const getUserData = async () => {
            await axios.get("http://localhost:8080/user")
                .then((res) => {
                    const userData = res.data;
                    const userIdList = userData.map(user => ({
                        id: user.id
                    }));
                    const userCredentials = userData.map(user => ({
                        email: user.email,
                        password: user.password
                    }));
                    setAllUsers(userCredentials);
                    setAllUserIds(userIdList);
                    console.log(allUsers);
                    console.log(userIdList);
                })
                .catch((err) => console.error(err));
        }
        getUserData();
    }, []);

    function handleSubmit() {
        const user = {
            email,
            password
        }
        let userFound = false;
        let userIndex = 0;
        allUsers.forEach(element => {
            if (JSON.stringify(user) === JSON.stringify(element)) {
                userFound = true;
                setCurrentUserId(allUserIds[userIndex]);
            }
            userIndex += 1;
        });
        if (userFound) {
            console.log("pass", user, currentUserId);
            //Login'e istek yolla
            redirect("/calendar");
        }
        else {
            console.log("fail");
            //Hatalı olan inputu göster düzelttir.
        }
    }

    return (
        <div className='bodyy bg-gradient-to-r from-teal-300 to-blue-400'>
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