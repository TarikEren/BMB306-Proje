import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';

function Admin() {

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
            id: 4,
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
    //    getUserData();
    // }, []);
    // useEffect(() => {
    //     console.log(allUsers);
    // }, [allUsers]);
     
  const handleDelete = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`)
          .then((res) => {
              if (res.status === 200) {
                  setAllUsers(allUsers.filter(user => user.id !== id));
              }
          })
          .catch((err) => console.error(err));
  };

  return (
      <React.Fragment>
          <Navbar />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen w-screen p-5">
              <table className="w-full text-sm text-left rtl:text-right table-auto w-full">
                  <thead className="text-xl text-white uppercase bg-blue-500 border-b border-blue-600 dark:text-white">
                      <tr>
                          <th>ID</th>
                          <th>Username</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Email</th>
                          <th>Account Type</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody className="text-base">
                      {allUsers.map(user => (
                          <tr className='border' key={user.id}>
                              <td >{user.id}</td>
                              <td>{user.username}</td>
                              <td>{user.name}</td>
                              <td>{user.surname}</td>
                              <td>{user.email}</td>
                              <td>{user.accountType}</td>
                              <td>
                                  <button
                                      onClick={() => handleDelete(user.id)}
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