import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { redirect } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"
import "./css/login.css"
import GlobalContext from '../context/GlobalContext';

function Index() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [AllEmailsPasswords, setAllEmailsPasswords] = useState([]);
    const [allUserInfo, setAllUserInfo] = useState([]);
    const { setCurrentUser, setUserLoggedIn } = useContext(GlobalContext);

    useEffect(() => {
        const getUserData = async () => {
            await axios.get("http://localhost:8080/user")
                .then((res) => {
                    const userData = res.data;
                    const userInfo = userData.map(user => ({
                        id: user.id,
                        email: user.email,
                        password: password,

                    }));
                    const userCredentials = userData.map(user => ({
                        email: user.email,
                        password: user.password
                    }));
                    setAllEmailsPasswords(userCredentials);
                    setAllUserInfo(res.data);
                    console.log("All User Data: ", res.data);
                    console.log("All emails and passwords: ", AllEmailsPasswords);
                    console.log("All User Info: ", userInfo);
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
        AllEmailsPasswords.forEach(element => {
            if (JSON.stringify(user) === JSON.stringify(element)) {
                userFound = true;
                setCurrentUser(allUserInfo[userIndex]);
            }
            userIndex += 1;
        });
        if (userFound) {
            setUserLoggedIn(true);
            //TODO: Login'e istek yolla
            console.log("User Details: ", user);
            redirect("/calendar");
        }
        else {
            console.log("fail");
            //TODO: Email kontrol ettir.
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