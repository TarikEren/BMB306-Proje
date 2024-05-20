import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import logo from "../assets/logo.png";

function Navbar() {
    const { userLoggedIn, userIsPremium } = useContext(GlobalContext);
    return (
        <nav className='flex flex-row bg-red-400 px-4 py-2 text-white'>
            <div className="flex flex-row items-center">
                <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
                <a href="/" className='text-white py-2 text-xl'>Calendar</a>
            </div>
            <ul className='flex flex-row items-center justify-end w-full'>
                <div className="flex flex-row items-center space-x-3">
                    <li className='p-2'>
                        <a href="/about" className='p-3 border rounded'>About</a>
                    </li>
                    <li className='p-2'>
                        <a href="/plans" className='p-3 border rounded'>{userIsPremium && userLoggedIn ? ("Plans") : ("Purchase")}</a>
                    </li>
                    {userLoggedIn ? (
                        <>
                            <li className='p-2'>
                                <a href="/calendar" className='p-3 border rounded'>Calendar</a>
                            </li>
                            <li className='p-2'>
                                <a href="/account" className='p-3 border rounded'>Account</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='p-2'>
                                <a href="/register" className='p-3 border rounded'>Register</a>
                            </li>
                        </>
                    )}
                </div>
            </ul>
        </nav>
    );

}

export default Navbar;