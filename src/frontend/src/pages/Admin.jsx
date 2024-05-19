import React from 'react';
import Navbar from '../components/Navbar';

function Index() {
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