//Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

//Pages
import Index from './pages/Index';
import Register from './pages/Register';
import About from './pages/About';
import Account from './pages/Account';
import Payment from './pages/Payment';
import Plans from './pages/Plans';
import Calendar from './pages/Calendar';
import Admin from "./pages/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/account",
        element: <Account />
    },
    {
        path: "/payment",
        element: <Payment />
    },
    {
        path: "/plans",
        element: <Plans />
    },
    {
        path: "/calendar",
        element: <Calendar />
    },
    {
        path: "/admin",
        element: <Admin />
    }
]);
function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
