import React, {useState, useEffect} from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';

function Index() {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            await axios.get("http://localhost:8080/user")
                .then((res) => {
                    const userData = res.data;
                    setAllUsers(userData);
                })
                .catch((err) => console.error(err));
        }
        getUserData();
    }, []);
    
    useEffect(() => {
        console.log(allUsers);
    }, [allUsers]);

    return (
        <React.Fragment>
            <Navbar />
            <div className="h-screen w-screen">
                Admin dashboard
            </div>
        </React.Fragment>
    );
}

export default Index;