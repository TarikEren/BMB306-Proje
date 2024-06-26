import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import logo from "../assets/logo.png";

function Navbar() {
    const { userLoggedIn } = useContext(GlobalContext);
    let accountType = localStorage.getItem("accountType");
    return (
        <nav className='flex flex-row bg-gradient-to-r from-teal-300 to-blue-400 drop-shadow-2xl px-4 py-2 text-white'>
            <div className="flex flex-row items-center">
                <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
                <a href="/calendar" className='text-white py-2 text-xl'>Calendar</a>
            </div>
            <ul className='flex flex-row items-center justify-end w-full'>
                <div className="flex flex-row items-center space-x-3">
                    <li className='p-2'>
                        <a href="/about" className='p-3 border rounded'>About</a>
                    </li>
                    <li className='p-2'>
                        <a href="/plans" className='p-3 border rounded'>{ accountType === "premium" ? ("Plans") : ("Purchase")}</a>
                    </li>
                    <li className='p-2'>
                        <a href="/calendar" className='p-3 border rounded'>Calendar</a>
                    </li>
                    <li className='p-2'>
                        <a href="/account" className='p-3 border rounded'>Account</a>
                    </li>
                </div>
            </ul>
        </nav>
    );

}

export default Navbar;