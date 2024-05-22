import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';

function Index() {

    const allUsers = [
        {
            accountType: "free",
            email: "abc@def.com",
            id: 1,
            name: "abc",
            password: "123",
            surname: "def",
            username: "user"
        },
        {
            accountType: "free",
            email: "efg@def.com",
            id: 2,
            name: "efg",
            password: "123",
            surname: "def",
            username: "vipuser"
        },
        {
            accountType: "premium",
            email: "abcd@def.com",
            id: 3,
            name: "abcd",
            password: "123abc",
            surname: "def",
            username: "vipuser1"
        },
        {
            accountType: "premium",
            email: "abcdxyz@def.com",
            id: 3,
            name: "abcd",
            password: "123abc",
            surname: "def",
            username: "vipuser1asdfg"
        },
    ]
    // Veritabanı ile kullanım için yorum satılarını kaldır,.
    // const [allUsers, setAllUsers] = useState([]);
    // useEffect(() => {
    //     const getUserData = async () => {
    //         await axios.get("http://localhost:8080/user")
    //             .then((res) => {
    //                 const userData = res.data;
    //                 setAllUsers(userData);
    //             })
    //             .catch((err) => console.error(err));
    //     }
    //     getUserData();
    // }, []);
    // useEffect(() => {
    //     console.log(allUsers);
    // }, [allUsers]);

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