//Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

//Pages
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Account from './pages/Account';
import Payment from './pages/Payment';
import Plans from './pages/Plans';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/account",
        element: <Account/>
    },
    {
        path: "/payment",
        element: <Payment/>
    },
    {
        path: "/plans",
        element: <Plans/>
    }
]);
function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
