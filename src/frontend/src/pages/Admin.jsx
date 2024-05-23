import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';

function Admin() {

    // const allUsers = [
    //   {
    //     email: "admin@admin.com",
    //     username: "admin",
    //     password: "admin",
    //     name: "",
    //     surname: "",
    //     accountType: "admin"
    //   },
    //   {
    //     email: "normal@kullanıcı.com",
    //     username: "normal",
    //     password: "123",
    //     name: "normal",
    //     surname: "normal",
    //     accountType: "free"
    //   },
    //   {
    //     email: "vip@kullanıcı.com",
    //     username: "vip",
    //     password: "123",
    //     name: "normal",
    //     surname: "normal",
    //     accountType: "premium"
    //   }

    // ]

    let allUsers = JSON.parse(localStorage.getItem("accounts"));
    let usersToView = allUsers.filter((elem) => elem.email !== "admin@admin.com");

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
    //    getUserData();
    // }, []);
    // useEffect(() => {
    //     console.log(allUsers);
    // }, [allUsers]);

    const handleDelete = (email) => {
        let newAllUsers = allUsers.filter((item) => { return item.email !== email });
        localStorage.setItem("accounts", JSON.stringify(newAllUsers));
        alert("Kullanıcı silindi");
        window.location.reload();
        console.log(newAllUsers);
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen w-screen p-5">
                <table className="w-full text-sm text-left rtl:text-right table-auto w-full">
                    <thead className="text-xl text-white uppercase bg-gradient-to-r from-teal-300 to-blue-400 border-b border-blue-600 dark:text-white">
                        <tr>
                            <th className='pl-3'>Username</th>
                            <th className='pl-3'>Name</th>
                            <th className='pl-3'>Surname</th>
                            <th className='pl-3'>Email</th>
                            <th className='pl-3'>Account Type</th>
                            <th className='pl-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-base">
                        {usersToView.map(user => (
                            <tr className='border' key={user.id}>
                                <td className='pl-3'>{user.username}</td>
                                <td className='pl-3'>{user.name}</td>
                                <td className='pl-3'>{user.surname}</td>
                                <td className='pl-3'>{user.email}</td>
                                <td className='pl-3'>{user.accountType}</td>
                                <td className='pl-3'>
                                    <button
                                        onClick={() => handleDelete(user.email)}
                                        className="bg-red-500 text-white p-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Admin;