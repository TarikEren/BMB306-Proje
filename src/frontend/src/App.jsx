//Modules
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

//Pages
import Index from './pages/Index';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    }
])
function App() {

    return (
        <>
            <div className="bg-red-700 text-white rounded p-2 font-semibold">Hello, World!</div>
        </>
    )
}

export default App
