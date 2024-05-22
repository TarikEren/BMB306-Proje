import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"
import "./css/login.css"
import GlobalContext from '../context/GlobalContext';

function Index() {

    const { currentUser, accountType, setCurrentUser, setUserLoggedIn, userLoggedIn, setAccountType } = useContext(GlobalContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    let navigate = useNavigate();
    let allUsers = JSON.parse(localStorage.getItem("accounts"));
    let allUserCredentials = allUsers.map(user => ({
        email: user.email,
        password: user.password
    }));
    let userIndex = 0;

    const handleSubmit = () => {
        const user = {
            email: email,
            password: password
        };
        console.log("User: ", user);
        console.log("All Users: ", allUsers);

        let userFound = false;
        allUserCredentials.forEach(element => {
            if (JSON.stringify(user) === JSON.stringify(element)) {
                userFound = true;
                setCurrentUser(allUsers[userIndex]);
                setAccountType(allUsers[userIndex].accountType);
            }
            userIndex += 1;
        });

        if (userFound) {
            setUserLoggedIn(true);
        } else {
            console.log("fail");
        }
    };

    useEffect(() => {
        if (currentUser && userLoggedIn) {
            console.log("Account type: ", accountType);
            navigate("/calendar");
        }
        console.log(currentUser, userLoggedIn, accountType);
    }, [currentUser, userLoggedIn, accountType]);

    // useEffect(() => {
    //     if (localStorage.getItem("accounts"))
    //         localStorage.setItem("accounts", JSON.stringify(admin));
    // }, [admin])

    return (
        <div className='bodyy bg-gradient-to-r from-teal-300 to-blue-400'>
            <div className="wrapper">
                <form>
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