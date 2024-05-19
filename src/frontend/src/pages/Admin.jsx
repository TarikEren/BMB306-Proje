import React from 'react';
import Navbar from '../components/Navbar';

function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-screen w-screen">
        <div className="grid grid-cols-7 h-screen">
            Admin dashboard
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;